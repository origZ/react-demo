import styled from "styled-components";

export const ScrollIndicatorWrapper = styled.div`
  > .top {
    position: fixed;
    top: 0;
    z-index: 1;
    width: 100%;
    text-align: center;
    background-color: #075b0a;
    color: #fff;
    .scroll {
      width: 100%;
      height: 10px;
      background: #aaf900;
      .currentProgress {
        width: 0%;
        height: 10px;
        background: #8b02b5;
      }
    }
  }
  > .container {
    margin-top: 100px;
    text-align: center;
  }
  > .progress {
    position: fixed;
    right: 20px;
    top: 50%;
  }
`;
