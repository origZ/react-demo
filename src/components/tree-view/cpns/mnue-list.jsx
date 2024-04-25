import React, { memo } from "react";
import MenuItem from "./menu-item";

const MenuList = memo(({ list = [] }) => {
  return (
    <ul className="menu-list">
      {list && list.length
        ? list.map((listItem) => <MenuItem item={listItem} />)
        : null}
    </ul>
  );
});

export default MenuList;
