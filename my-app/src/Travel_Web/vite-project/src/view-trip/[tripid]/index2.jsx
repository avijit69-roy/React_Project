import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../Service/FireBaseConfig";
import { toast } from 'sonner';
import InfoSection from '../components/InfoSection';
import Hotels from '../components/Hotels';
import PlacesToVisit from '../components/PlacesToVisit';

function Viewtrip() {

    const { tripid } = useParams(); // Get the trip ID from the URL parameters
    const [tripdata, setTripdata] = useState([]);

    const GetTripData = async () => {
        // Here you would typically fetch the trip data from your backend or database using the tripid. For example, you might use an API call or a database query to retrieve the trip details based on the tripid. Once you have the data, you can set it in the component's state and render it accordingly.     
        const docRef = doc(db, "AITrips", tripid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            setTripdata(docSnap.data()); // Set the trip data in state
        } else {
            // docSnap.data() will be undefined in this case
            console.log("No such document!");
            toast.error("No such document!")
        }
    };

    useEffect(() => {
        GetTripData(); // Fetch the trip data when the component mounts
    }, [tripid]); // Re-run the effect if the tripid changes

    return (
        <div className='p-10 md:px-20 lg:px-44 xl:px-60'>
            {/* Information Section */}
            <InfoSection tripdata={tripdata} />

            {/* Recommendation hotels */}

            <Hotels tripdata={tripdata} />

            {/* Itinerary Section */}
            <PlacesToVisit tripdata={tripdata}/>

            {/* Footer*/}

        </div>
    )
}

export default Viewtrip