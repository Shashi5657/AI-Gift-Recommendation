import React from "react";

function GiftRecommendations({ recommendations }) {
  return (
    <div>
      <h2>Recommended Gifts</h2>
      {recommendations.length === 0 ? (
        <p>No recommendations found.</p>
      ) : (
        <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
          {recommendations.map((rec, index) => (
            <li
              key={index}
              style={{
                marginBottom: "20px",
                borderBottom: "1px solid #ddd",
                paddingBottom: "10px",
              }}
            >
              <h3>{rec.idea}</h3>
              <p>
                <em>{rec.explanation}</em>
              </p>
              {rec.product ? (
                <div style={{ marginTop: "10px" }}>
                  <strong>Suggested Product:</strong>
                  <br />
                  <p>
                    <a
                      href={rec.product.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {rec.product.name}
                    </a>
                  </p>
                  <p>{rec.product.description}</p>
                  <p>Price: ${rec.product.price}</p>
                </div>
              ) : (
                <p>No exact product match found in the catalog.</p>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default GiftRecommendations;
