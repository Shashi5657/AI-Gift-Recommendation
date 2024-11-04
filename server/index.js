require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { getGiftRecommendations } = require("./ai");
const catalog = require("./catalog.json");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Endpoint to generate gift recommendations
app.post("/api/recommendations", async (req, res) => {
  try {
    const { personalityTraits, preferences, occasion } = req.body;

    // Get recommendations from AI
    const aiSuggestions = await getGiftRecommendations(
      personalityTraits,
      preferences,
      occasion
    );

    // Match AI suggestions with product catalog (basic example)
    const matchedProducts = catalog.filter((product) => {
      // Simple matching logic: if product name or description contains a keyword from the idea
      return aiSuggestions.some(
        (suggestion) =>
          product.name.toLowerCase().includes(suggestion.idea.toLowerCase()) ||
          product.description
            .toLowerCase()
            .includes(suggestion.idea.toLowerCase())
      );
    });

    // Combine AI suggestions with matched products
    const results = aiSuggestions.map((suggestion) => {
      const productMatch = matchedProducts.find(
        (product) =>
          product.name.toLowerCase().includes(suggestion.idea.toLowerCase()) ||
          product.description
            .toLowerCase()
            .includes(suggestion.idea.toLowerCase())
      );

      return {
        idea: suggestion.idea,
        explanation: suggestion.explanation,
        product: productMatch || null,
      };
    });

    res.json({ recommendations: results });
  } catch (error) {
    console.error("Error generating recommendations:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
