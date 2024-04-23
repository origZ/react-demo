import React, { memo } from "react";
import Accordian from "./components/accordian";
import RandomColor from "./components/random-color";

const App = memo(() => {
  return (
    <div>
      <Accordian />
      <RandomColor />
    </div>
  );
});

export default App;
