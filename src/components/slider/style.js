import styled from "styled-components";

export const SliderWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 600px;
  height: 450px;

  .current-image {
    width: 100%;
    height: 100%;
    border-radius: 0.5rem;
    box-shadow: 0 0 7px #666;
  }
  .hide-current-image {
    display: none;
  }

  .arrow {
    position: absolute;
    width: 2rem;
    height: 2rem;
    color: #fff;
    filter: drop-shadow(0px 0px 5px #555);
  }
  .arrow-left {
    left: 1rem;
  }
  .arrow-right {
    right: 1rem;
  }

  .indicator {
    position: absolute;
    bottom: 1rem;
    display: flex;

    .dot {
      margin: 0 0.2rem;
      width: 15px;
      height: 15px;
      background-color: #ff1133;
      border-radius: 50%;
      border: none;
      outline: none;
    }

    .inactive-dot {
      background-color: #fff;
    }
  }
`;
