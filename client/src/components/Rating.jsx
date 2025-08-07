import React, { useState } from "react";

const Rating = () => {
  const [rating, setRating] = useState(0);
  console.log(rating,"rating")
  return (
    <div className="text-2xl cursor-pointer ">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
         style={{ color: star <= rating ? '#facc15' : '#d1d5db' }}
          key={star}
          onClick={() => setRating(star)}
        >
          ★
        </span>
      ))}
      <p className="mt-5">
        You rated: {rating} star{rating !== 1 ? "s" : ""}
      </p>
    </div>
  );
};

export default Rating;
