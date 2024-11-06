import React, { useState } from "react";
import QuestionnaireForm from "./components/QuestionnaireForm";
import GiftRecommendations from "./components/GiftRecommendations";

function App() {
  const [recommendations, setRecommendations] = useState(null);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Personalized Gift Recommendation Platform</h1>
      <QuestionnaireForm onRecommendations={setRecommendations} />
      {recommendations && (
        <GiftRecommendations recommendations={recommendations} />
      )}
    </div>
  );
}

export default App;
