export const SelectTravelesList = [
    {
        id: 1,
        title:"Just me",
        description:"I am traveling alone",
        icon:"👤",
        people: '1'
    },

    {
        id: 2,
        title:"Couple",
        description:"I am traveling with a partner",
        icon:"👥",
        people: '2'
    },

    {
        id: 3,
        title:"Family",
        description:"I am traveling with my family",
        icon:"👨‍👩‍👧‍👦",
        people: '3+'
    },

    {
        id: 4,
        title:"Friends",
        description:"I am traveling with my friends",
        icon:"👨‍👨‍👦",
        people: '3+'
    }

]


export const SelectBudgetOptions = [
    {
        id: 1,
        title:"Cheap",
        description:"Stay Conscious of costs",
        icon:"💸",
    },

    {
        id: 2,
        title:"moderate",
        description:"Keep Cost on the average side",
        icon:"💰",
    },

    {
        id: 3,
        title:"Luxury",
        description:"I want to splurge",
        icon:"💎",
    }

]

//export const AI_PROMPT = 'generate travel plan for location:{location},for {days} days for {traveler} with {budget} budget,Give me a hotels options list with HotelName, Hotel address,Price,Hotel image url,geo coordinate ,rating,descriptions and suggest itiernary with placeName,Place Details ,Place Image URL,geo coordinate,Ticket Pricing ,rating, Time travel each of the location for {days} days with each days plan with best time to visit in JSon format.'

export const AI_PROMPT = `Generate travel plan for location: {location}, for {days} days for {traveler} with {budget} budget. 

IMPORTANT FOR IMAGES: Do not use example.com for image URLs. Instead, generate a placeholder URL using this exact format: https://placehold.co/600x400?text=Place+Name (Replace 'Place+Name' with the actual name of the hotel or place, using '+' for spaces).

You MUST return the response strictly in the following JSON format, using exactly these keys:
{
  "hotel_options":[
    {
      "hotel_name": "String",
      "address": "String",
      "price_per_night": "String",
      "image_url": "String",
      "geo_coordinates": {
        "latitude": "Number",
        "longitude": "Number"
      },
      "rating": "Number",
      "description": "String"
    }
  ],
  "itinerary":[
    {
      "day": "Number",
      "theme": "String",
      "plan":[
        {
          "placeName": "String",
          "placeAddress": "String",
          "placeDetails": "String",
          "placeImageUrl": "String",
          "geoCoordinate": {
            "latitude": "Number",
            "longitude": "Number"
          },
          "ticketPricing": "String",
          "rating": "Number",
          "timeTravel": "String",
          "bestTimeToVisit": "String"
        }
      ]
    }
  ]
}`;