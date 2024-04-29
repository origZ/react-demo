import styled from "styled-components";

export const TicTacToeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;

  .square {
    padding: 0px;
    margin-right: -1px;
    margin-top: -1px;
    height: 100px;
    width: 100px;
    float: left;
    border: 1px solid red;
    font-size: 40px;
    text-align: center;
    cursor: pointer;
  }
`;
