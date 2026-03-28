import React, { useRef, useState } from "react";
import { Autocomplete, LoadScript } from "@react-google-maps/api";
import { AI_PROMPT, SelectBudgetOptions, SelectTravelesList } from "../constants/Option";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/Checkbox";
import { toast } from "sonner";
import { FcGoogle } from "react-icons/fc";
import { generateTravelPlan } from "../Service/AIModel";
import axios from "axios";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useGoogleLogin } from "@react-oauth/google";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../Service/FireBaseConfig";
import { GoogleAuthProvider, signInWithCredential, getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";



const LIBRARIES = ["places"];

const CreateTrip = () => {
  const [loading, setLoading] = useState(false);
  const [OpenDailogue, setOpenDailogue] = useState(false);
  const navigate= useNavigate();

  // Google autocomplete reference
  const autocompleteRef = useRef(null);

  // Main form state
  const [tripData, setTripData] = useState({
    destination: "",
    days: "",
    budget: "",
    travelType: ""
  });

  // Checkbox state
  const [isConfirmed, setIsConfirmed] = useState(false);

  // Runs when autocomplete loads
  const onLoad = (autocomplete) => {
    autocompleteRef.current = autocomplete;
  };

  // Runs when user selects a place
  const onPlaceChanged = () => {

    if (!autocompleteRef.current) return;

    const place = autocompleteRef.current.getPlace();

    const label =
      place.formatted_address && place.name
        ? `${place.name}, ${place.formatted_address}`
        : place.name || place.formatted_address || "Unknown location";

    setTripData((prev) => ({
      ...prev,
      destination: label
    }));

    console.log("Updated Trip Data:", {
      ...tripData,
      destination: label
    });
  };

  // Handle days input
  const handleDaysChange = (e) => {

    const value = e.target.value;

    setTripData((prev) => ({
      ...prev,
      days: value
    }));

    // If user changes days again, reset confirmation
    setIsConfirmed(false);
  };

  // Handle budget click
  const handleBudgetSelect = (budget) => {
    setTripData((prev) => ({
      ...prev,
      budget
    }));
  };

  // Handle travel preference click
  const handleTravelTypeSelect = (travelType) => {
    setTripData((prev) => ({
      ...prev,
      travelType
    }));
  };


  // Get user profile with access token
  const GetUserProfile = async (tokenInfo) => {
    axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo.access_token}`, 
    {
      headers: {
        Authorization: `Bearer ${tokenInfo.access_token}`,
        Accept: 'application/json'
      }
    })
      .then(response => {
        console.log("User Profile:", response.data);
        // 1. Save to local storage
        localStorage.setItem("user", JSON.stringify(response.data));
        setOpenDailogue(false); // Close dialog after successful login
        handleGenerateTrip(); // Generate trip after successful login
      })
  };


  // Login function (placeholder)
  const login = useGoogleLogin({
    onSuccess: (codeRes) => {
      GetUserProfile(codeRes);
    },
    onError: (error) => {
      console.error("Google Login Error:", error);
    }
  });

  // Save trip to Firebase (placeholder)
  const SaveTripToFirebase = async (tripJson) => {
    
    const user= JSON.parse(localStorage.getItem("user"));
    const docId=Date.now().toString(); // Unique ID based on timestamp
  
    await setDoc(doc(db, "AITrips", docId), {
      userSelection: tripData,
      TripData: tripJson,
      UserEmail: user?.email || "Unknown",
      id: docId
    });

    // After saving, navigate to the view trip page with the new trip ID
    navigate(`/view-trip/${docId}`);
  };


  // Checkbox handler
  const handleCheckboxChange = (checked) => {

    // Validate days
    if (tripData.days > 5) {
      alert("Maximum trip duration is 5 days");

      // Reset days
      setTripData((prev) => ({
        ...prev,
        days: ""
      }));

      // Remove tick
      setIsConfirmed(false);

      return;
    }


    else if (!tripData.destination || !tripData.days || !tripData.budget || !tripData.travelType) {
      toast.warning("Please fill all fields before confirming.", { position: "top-center" });

      // Remove tick
      setIsConfirmed(false);
      return;
    }

    setIsConfirmed(checked);
  };

  // Generate itinerary
  const handleGenerateTrip = async () => {

    const user = localStorage.getItem("user");
    if (!user) {
      setOpenDailogue(true);
      return;
    }

    if (loading) return;

    if (!tripData.destination || !tripData.days || !tripData.budget || !tripData.travelType) {
      toast.warning("Please fill all fields before generating.");
      return;
    }

    try {
      setLoading(true);

      // Construct the prompt
      const FINAL_PROMPT = AI_PROMPT
        .replace("{location}", tripData.destination)
        .replace("{days}", tripData.days)
        .replace("{traveler}", tripData.travelType)
        .replace("{budget}", tripData.budget)
        .replaceAll("{days}", tripData.days);

      console.log("Final Prompt:", FINAL_PROMPT);

      const result = await generateTravelPlan(FINAL_PROMPT);

      // ==========================================
      // FIX: Clean the AI response before parsing
      // ==========================================
      let cleanText = result;

      // 1. Remove markdown formatting (```json and ```) if the AI includes it
      if (cleanText.includes("```")) {
        cleanText = cleanText.replace(/```json/gi, "").replace(/```/gi, "");
      }

      // 2. Remove any leading/trailing whitespace
      cleanText = cleanText.trim();

      // Parse the cleaned JSON
      const tripJson = JSON.parse(cleanText);

      console.log("Parsed AI Response:", tripJson);
      toast.success("Itinerary generated successfully!");

      // TODO: Navigate to a result page or save to Firebase here
      await SaveTripToFirebase(tripJson);

    } catch (error) {
      console.error("Error generating or parsing trip:", error);

      // Give a specific error if the JSON is still broken/cut off
      if (error instanceof SyntaxError) {
        toast.error("The AI generated an incomplete response. Please click Generate again.");
      } else if (error?.message?.includes("429")) {
        toast.error("Too many requests. Please wait 60 seconds and try again.");
      } else {
        toast.error("Failed to generate itinerary. Try again later.");
      }
    } finally {
      setLoading(false);
    }
  };



  return (
    <div className="sm:px-10 md:px-32 lg:px-56 xl:px-72 px-5 mt-10">

      <h2 className="text-3xl font-bold mb-4">
        Tell us your travel preferences 🌴⛺
      </h2>

      <div className="mt-20 flex flex-col gap-10">

        {/* Destination */}
        <div>

          <h2 className="text-xl font-medium my-3">
            Choose your destination
          </h2>

          <LoadScript
            googleMapsApiKey={import.meta.env.VITE_MAPS_JAVASCRIPT_API_KEY}
            libraries={LIBRARIES}
          >

            <Autocomplete
              onLoad={onLoad}
              onPlaceChanged={onPlaceChanged}
            >

              <input
                type="text"
                placeholder="Enter destination"
                className="border p-2 w-full"
              />

            </Autocomplete>

          </LoadScript>

          {tripData.destination && (
            <p className="mt-2 text-green-600">
              Selected: {tripData.destination}
            </p>
          )}

        </div>

        {/* Days */}
        <div>

          <h2 className="text-xl font-medium my-3">
            How many days will you travel?
          </h2>

          <input
            type="number"
            placeholder="Enter number of days"
            className="border p-2 w-full"
            value={tripData.days}
            onChange={handleDaysChange}
          />

        </div>

        {/* Budget */}
        <div>

          <h2 className="text-xl font-medium my-3">
            What is your Budget?
          </h2>

          <div className="grid grid-cols-3 gap-3">

            {SelectBudgetOptions.map((item, index) => (

              <div
                key={index}
                onClick={() => handleBudgetSelect(item.title)}
                className={`border p-4 rounded-lg cursor-pointer hover:shadow-lg
                ${tripData.budget === item.title ? "border-blue-600 shadow-md" : ""}`}
              >

                <h2 className="text-lg font-semibold">
                  {item.icon} {item.title}
                </h2>

                <p className="text-gray-600">
                  {item.description}
                </p>

              </div>

            ))}

          </div>

        </div>

        {/* Travel Preference */}
        <div>

          <h2 className="text-xl font-medium my-3">
            What is your Travel Preference?
          </h2>

          <div className="grid grid-cols-3 gap-5">

            {SelectTravelesList.map((item, index) => (

              <div
                key={index}
                onClick={() => handleTravelTypeSelect(item.title)}
                className={`border p-4 rounded-lg cursor-pointer hover:shadow-lg
                ${tripData.travelType === item.title ? "border-blue-600 shadow-md" : ""}`}
              >

                <h2 className="text-lg font-semibold">
                  {item.icon} {item.title}
                </h2>

                <p className="text-gray-600">
                  {item.description}
                </p>

              </div>

            ))}

          </div>

        </div>
      </div>

      {/* Checkbox */}
      <div className="p-4 flex my-5 justify-start items-center gap-4">

        <h2 className="text-sm font-medium mr-4">
          Provided Information is correct?
        </h2>

        <Checkbox
          checked={isConfirmed}
          //disabled={!isConfirmed}
          onCheckedChange={handleCheckboxChange}
          // onClick={handleGenerateTrip}
          className="border border-cyan-500"
        />

      </div>

      {/* Button */}
      <div className="p-4 flex my-5 justify-end">
        <Button
          disabled={!isConfirmed || loading}
          onClick={handleGenerateTrip}
        >
          {loading ? "Generating..." : "Generate Itinerary"}
        </Button>
      </div>

      <Dialog open={OpenDailogue}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              {/* <img src="/public/logo.svg" /> */}
              <h2 className="text-lg font-bold mt-7">Sign in with Google</h2>
              <p>Sign in to the app with google authentication</p>
              <Button className='mt-5 w-full'
                onClick={login}>
                <FcGoogle className='mr-2 flex gap-4 items-center-safe' />
                Sign in with Google
              </Button>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CreateTrip;