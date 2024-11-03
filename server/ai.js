require("dotenv").config();
const axios = require("axios");

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const GEMINI_API_URL = process.env.GEMINI_API_URL;

// Mock function for calling Gemini AI API
async function getGiftRecommendations(
  personalityTraits,
  preferences,
  occasion
) {
  // In a real-world scenario, you would call the Gemini API:
  // const response = await axios.post(GEMINI_API_URL, {
  //   personalityTraits, preferences, occasion
  // }, {
  //   headers: {
  //     'Authorization': `Bearer ${GEMINI_API_KEY}`,
  //     'Content-Type': 'application/json'
  //   }
  // });
  // const recommendations = response.data.recommendations;

  // For demonstration, we return a mock AI-generated suggestion:
  return [
    {
      idea: "A personalized leather journal",
      explanation:
        "They appreciate thoughtful, long-lasting items and enjoy reflection.",
    },
    {
      idea: "A gourmet chocolate box",
      explanation:
        "They have a sweet tooth and it’s a delightful treat for the special occasion.",
    },
  ];
}

module.exports = {
  getGiftRecommendations,
};
