import React, { memo } from "react";
import { TreeViewWrapper } from "./style";
import MenuList from "./cpns/mnue-list";

const TreeView = memo(({ menus = [] }) => {
  return (
    <TreeViewWrapper>
      <MenuList list={menus} />
    </TreeViewWrapper>
  );
});

export default TreeView;
