import { collection, getDocs, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useNavigation } from 'react-router-dom';
import { db } from '../Service/FireBaseConfig';
import UserTripCardItem from './component/UserTripCardItem';

function MyTrips() {

    const [Usertrip, setUserTrips] = useState([]);
    const navigation = useNavigation();
    useEffect(() => {
        GetUserTrips();
    }, []);

    const GetUserTrips = async () => {
        const user = JSON.parse(localStorage.getItem("user"));

        if (!user) {
            navigation("/"); // Redirect to the hero page if the user is not logged in
            return;
        }

        setUserTrips([]); // Clear previous trips before fetching new ones

        // Fetch the user's trips from the database using their email or user ID
        // Example using Firebase Firestore:
        // https://firebase.google.com/docs/firestore/query-data/get-data  ---Bellow code is From firebase documentation

        const q = query(collection(db, "AITrips"), where("UserEmail", "==", user?.email));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            setUserTrips((prevTrips) => [...prevTrips, doc.data()]);
        });
    }

    return (
        <div className='sm:px-10 md:px-32 lg:px-56 xl:px-72 px-5 mt-10'>
            <h1 className='text-3xl font-bold'>My Trips</h1>

            <div className='grid grid-cols-2 lg:grid-cols-4 gap-9 mt-5'>
                {Usertrip.map((trip,index)=>(
                    <UserTripCardItem key={index} trip={trip} />

                ))}





                {/* {Usertrip.length === 0 ? (
                    <p className='text-xl mt-5'>You have no trips yet. Start planning your next adventure!</p>
                ) : (   
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5'>
                        {Usertrip.map((trip, index) => (
                            <div key={index} className='border rounded-lg p-4 shadow-md'>       
                                <h2 className='text-xl font-semibold mb-2'>{trip.TripName}</h2>
                                <p className='text-gray-600 mb-2'>Destination: {trip.Destination}</p>
                                <p className='text-gray-600 mb-2'>Duration: {trip.Duration} days</p>
                                <p className='text-gray-600 mb-2'>Budget: ${trip.Budget}</p>
                                <a href={`/view-trip/${trip.TripID}`} className='text-blue-500 hover:underline'>View Details</a>
                            </div>  
                        ))}
                    </div>
                )} */}
            </div>
        </div>
    )
}

export default MyTrips