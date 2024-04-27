import styled from "styled-components";

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  padding-top: 150px;
  width: 100%;
  height: 100%;
  overflow: auto;
  background: rgba(169, 170, 171, 0.5);
  animation: animateModal 0.5s;

  > .content {
    position: relative;
    margin: auto;
    padding: 0;
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #fefefe;
    border: 1px solid red;

    > .header {
      padding: 4px 16px;
      background-color: #5cb85c;
      color: #fff;

      .close-modal-icon {
        cursor: pointer;
        font-size: 40px;
        font-weight: bold;
        float: right;
      }
    }
    > .body {
      padding: 2px 15px;
      height: 200px;
    }
    > .footer {
      padding: 2px 16px;
      background-color: #5cb85c;
      color: #fff;
    }
  }
  @keyframes animateModal {
    from {
      top: -200px;
      opacity: 0;
    }
    to {
      top: 0;
      opacity: 1;
    }
  }
`;
