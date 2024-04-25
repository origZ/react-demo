import React, { memo, useState } from "react";
import MenuList from "./mnue-list";
import { FaMinus, FaPlus } from "react-icons/fa";

const MenuItem = memo(({ item }) => {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

  function handleshow(currentlabel) {
    setDisplayCurrentChildren({
      ...displayCurrentChildren,
      [currentlabel]: !displayCurrentChildren[currentlabel],
    });
  }
  return (
    <li>
      <div className="menu-item">
        <p>{item.label}</p>
        {item && item.children && item.children.length ? (
          <span onClick={() => handleshow(item.label)}>
            {displayCurrentChildren[item.label] ? (
              <FaMinus color="#fff" size={25} />
            ) : (
              <FaPlus color="#fff" size={25} />
            )}
          </span>
        ) : null}
      </div>
      {item &&
      item.children &&
      item.children.length > 0 &&
      displayCurrentChildren[item.label] ? (
        <MenuList list={item.children} />
      ) : null}
    </li>
  );
});

export default MenuItem;
