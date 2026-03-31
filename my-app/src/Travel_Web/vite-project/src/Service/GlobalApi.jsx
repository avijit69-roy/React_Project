
// it will contain all the api calls related to google maps and other global api calls which can be used across the app
// for now it will contain the api call to get the place details,Photos of the place from google maps api
//Used in InfoSection.jsx to get the place details and photos of the place
import axios from "axios"

const BASE_URL='https://places.googleapis.com/v1/places:searchText'

const config={
    headers:{
        'Content-Type':'application/json',
    
        'X-Goog-Api-Key' : import.meta.env.VITE_MAPS_JAVASCRIPT_API_KEY,
        'X-Goog-FieldMask' :[
            'places.photos',
            'places.displayName',
            'places.id',
            'places.priceLevel',
            'places.priceRange'
            
        ]
    }
}

export const GetPlaceDetails = async (data) => {
    return axios.post(BASE_URL,data, config)  
}

