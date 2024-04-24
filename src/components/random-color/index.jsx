import React, { memo, useEffect, useState } from "react";
import { RandomColorWrapper } from "./style";

const RandomColor = memo(() => {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#b65757");

  // 创建随机数
  function createRandomUtil(length) {
    return Math.floor(Math.random() * length);
  }

  // 改变颜色
  function handleCreateRandomColor() {
    // 根据类型创建颜色
    if (typeOfColor === "hex") {
      const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
      let hexColor = "#";
      for (let i = 0; i < 6; i++) {
        hexColor += hex[createRandomUtil(hex.length)];
      }
      setColor(hexColor);
    } else {
      let r = createRandomUtil(256);
      let g = createRandomUtil(256);
      let b = createRandomUtil(256);
      let rgbColor = `rgb(${r},${g},${b})`;
      setColor(rgbColor);
    }
  }

  // 类型改变时重新渲染组件
  useEffect(() => handleCreateRandomColor(), [typeOfColor]);

  return (
    <RandomColorWrapper color={color}>
      <button onClick={() => setTypeOfColor("hex")}>Create HEX Color</button>
      <button onClick={() => setTypeOfColor("rgb")}>Create RGB Color</button>
      <button onClick={handleCreateRandomColor}>Create Random Color</button>
      <div className="content">
        <h3>{typeOfColor === "rgb" ? "RGB Color" : "HEX color"}</h3>
        <h1>{color}</h1>
      </div>
    </RandomColorWrapper>
  );
});

export default RandomColor;
