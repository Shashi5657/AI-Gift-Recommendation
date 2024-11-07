import React, { useState } from "react";
import axios from "axios";

function QuestionnaireForm({ onRecommendations }) {
  const [personalityTraits, setPersonalityTraits] = useState("");
  const [preferences, setPreferences] = useState("");
  const [occasion, setOccasion] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/recommendations",
        {
          personalityTraits,
          preferences,
          occasion,
        }
      );
      onRecommendations(response.data.recommendations);
    } catch (error) {
      console.error("Error fetching recommendations:", error);
      onRecommendations(null);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <h2>Tell us about the recipient</h2>
      <div style={{ marginBottom: "10px" }}>
        <label>
          Personality Traits:
          <br />
          <input
            type="text"
            value={personalityTraits}
            onChange={(e) => setPersonalityTraits(e.target.value)}
            placeholder="e.g. artistic, outdoorsy, introverted"
            style={{ width: "300px" }}
          />
        </label>
      </div>
      <div style={{ marginBottom: "10px" }}>
        <label>
          Preferences or Interests:
          <br />
          <input
            type="text"
            value={preferences}
            onChange={(e) => setPreferences(e.target.value)}
            placeholder="e.g. coffee, gardening, meditation"
            style={{ width: "300px" }}
          />
        </label>
      </div>
      <div style={{ marginBottom: "10px" }}>
        <label>
          Occasion:
          <br />
          <input
            type="text"
            value={occasion}
            onChange={(e) => setOccasion(e.target.value)}
            placeholder="e.g. birthday, anniversary, graduation"
            style={{ width: "300px" }}
          />
        </label>
      </div>
      <button type="submit" style={{ padding: "8px 16px" }}>
        Get Recommendations
      </button>
    </form>
  );
}

export default QuestionnaireForm;
