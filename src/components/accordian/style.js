import styled from "styled-components";

export const AccordianWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  gap: 20px;

  > .btn {
    padding: 10px 20px;
    border: none;
    border-radius: 10px;
    color: #fff;
    background-color: #ea4c89;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
  }

  .accordian {
    width: 500px;

    > .item {
      margin-bottom: 10px;
      padding: 10px 20px;
      border-radius: 10px;
      background-color: #ea4c89;

      > .title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
        color: #fff;
      }

      > .content {
        text-indent: 2rem;
        height: auto;
        color: #fff;
      }
    }
  }
`;
