import React, { memo, useState } from "react";
import { FaStar } from "react-icons/fa";
import { StarRatingWrapper } from "./style";

const StarRating = memo(({ noOfstars = 5 }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(currentIndex) {
    setRating(currentIndex);
  }

  function handleMouseEnter(currentIndex) {
    setHover(currentIndex);
  }

  function handleMouseLeave() {
    setHover(rating);
  }
  return (
    <StarRatingWrapper>
      {[...Array(noOfstars)].map((_, index) => {
        index += 1;
        return (
          <FaStar
            className={index <= (hover || rating) ? "active" : "inactive"}
            key={index}
            onClick={() => handleClick(index)}
            onMouseMove={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave()}
            size={40}
          />
        );
      })}
    </StarRatingWrapper>
  );
});

export default StarRating;
