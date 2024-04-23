import React, { memo, useState } from "react";
import { AccordianWrapper } from "./style";
import { data } from "./data";

// 实现手风琴
const Accordian = memo(() => {
  const [selected, steSelected] = useState(null);
  const [isMultiple, setIsMultiple] = useState(false);
  const [multiple, setMultiple] = useState([]);

  // 单选模式
  function handleSingleSelection(currentId) {
    steSelected(currentId === selected ? null : currentId);
  }
  // 多选模式
  function handleMutilSelection(currentId) {
    let cpyMultiple = [...multiple];
    const findIndexOfCurrent = cpyMultiple.indexOf(currentId);
    if (findIndexOfCurrent === -1) cpyMultiple.push(currentId);
    else cpyMultiple.splice(findIndexOfCurrent, 1);
    setMultiple(cpyMultiple);
  }

  return (
    <AccordianWrapper>
      <button className="btn" onClick={() => setIsMultiple(!isMultiple)}>
        Enable Multi Selection
      </button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item" key={dataItem.id}>
              <div
                className="title"
                onClick={
                  isMultiple
                    ? () => handleMutilSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {isMultiple
                ? multiple.indexOf(dataItem.id) !== -1 && (
                    <div className="content">{dataItem.answer}</div>
                  )
                : selected === dataItem.id && (
                    <div className="content">{dataItem.answer}</div>
                  )}
            </div>
          ))
        ) : (
          <div>No data found !</div>
        )}
      </div>
    </AccordianWrapper>
  );
});

export default Accordian;
