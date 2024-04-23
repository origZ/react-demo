import styled from "styled-components";

export const RandomColorWrapper = styled.div`
  text-align: center;
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.themeColor};

  > .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    color: #fff;
    font-size: 60px;
    gap: 20px;
  }
`;
