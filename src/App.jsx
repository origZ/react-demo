import React, { memo } from "react";
import Accordian from "./components/accordian";
import RandomColor from "./components/random-color";
import StarRating from "./components/star-rating";

const App = memo(() => {
  return (
    <div>
      <Accordian />
      <RandomColor />
      <StarRating noOfstars={10} />
    </div>
  );
});

export default App;
