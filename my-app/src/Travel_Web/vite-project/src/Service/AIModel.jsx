// // To run this code you need to install the following dependencies:
// // npm install @google/genai
// AIModel.jsx
import { GoogleGenAI } from '@google/genai';

const apiKey = import.meta.env.VITE_GOOGLE_GEMINI_AI_API_KEY;

// Initialize the new SDK correctly with an object
const genAI = new GoogleGenAI({ apiKey: apiKey });

export async function generateTravelPlan(userPrompt) {
  try {
    const response = await genAI.models.generateContent({
      // FIX: Change 'gemini-1.5-flash' to 'gemini-2.5-flash'
      model: 'gemini-2.5-flash', 
      contents: userPrompt,
      config: {
        temperature: 0.4,
        topP: 0.95, 
        topK: 40,
        maxOutputTokens: 8192,
        responseMimeType: "application/json", 
      }
    });

    return response.text; 
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    throw error;
  }
}



 

