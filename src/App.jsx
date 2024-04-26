import React, { memo } from "react";
import Accordian from "./components/accordian";
import RandomColor from "./components/random-color";
import StarRating from "./components/star-rating";
import Slider from "./components/slider";
import LoadMoreData from "./components/load-more-data";
import TreeView from "./components/tree-view";
import { menus } from "./components/tree-view/data.js";
import QRCodeGenerator from "./components/qr-code-generator/index.jsx";
import LightDarkMode from "./components/light-dark-mode/index.jsx";
import ScrollIndicator from "./components/scroll-indicator/index.jsx";
const App = memo(() => {
  return (
    <div>
      {/* <Accordian /> */}
      {/* <RandomColor /> */}
      {/* <StarRating noOfstars={10} /> */}
      {/* <Slider url={"https://picsum.photos/v2/list"} page={"1"} limit={"10"} /> */}
      {/* <LoadMoreData /> */}
      {/* <TreeView menus={menus} /> */}
      {/* <QRCodeGenerator /> */}
      {/* <LightDarkMode /> */}
      <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} />
    </div>
  );
});

export default App;
