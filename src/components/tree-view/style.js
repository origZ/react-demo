import styled from "styled-components";

export const TreeViewWrapper = styled.div`
  min-height: 100vh;
  width: 350px;
  background: rgb(0, 71, 110);
  .menu-list {
    list-style: none;
  }
  .menu-item {
    display: flex;
    align-items: center;
    gap: 20px;
    cursor: pointer;
    color: #fff;
  }
`;
