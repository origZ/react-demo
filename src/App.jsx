import React, { memo } from "react";
import Accordian from "./components/accordian";
import RandomColor from "./components/random-color";
import StarRating from "./components/star-rating";
import Slider from "./components/slider";

const App = memo(() => {
  return (
    <div>
      <Accordian />
      <RandomColor />
      <StarRating noOfstars={10} />
      <Slider url={"https://picsum.photos/v2/list"} page={"1"} limit={"10"} />
    </div>
  );
});

export default App;
