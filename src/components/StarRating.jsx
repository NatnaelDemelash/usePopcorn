import React, { useState } from "react";
import Stars from "./Stars";

function StarRating() {
  const [rating, setRating] = useState(0);

  return (
    <div className="rating-container">
      <div className="star-container">
        {Array.from({ length: 10 }, (_, index) => (
          <Stars
            key={index}
            onRate={() => {
              setRating(index + 1);
            }}
            full={rating >= index + 1}
          />
        ))}
      </div>
      <div className="rating-text">{rating || ""}</div>
    </div>
  );
}

export default StarRating;
