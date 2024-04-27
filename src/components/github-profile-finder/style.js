import styled from "styled-components";

export const GithubWrapper = styled.div`
  margin: 0 auto;
  width: 90%;
  max-width: 1000px;
  padding: 20px;
  border-radius: 8px;

  .input-wrapper {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    gap: 20px;

    input {
      padding: 12px;
      font-size: 16px;
      border: none;
    }

    button {
      padding: 5px 12px;
      border: none;
      border-radius: 8px;
      background-color: #2cccf2;
      color: #000;
      cursor: pointer;
    }
  }
`;

export const UesrCardWrapper = styled.div`
  padding: 15px;
  border-radius: 10px;
  border: 1px solid;
  text-align: center;

  .avatar {
    height: 150px;
    aspect-ratio: 1/1;
    border-radius: 50%;
  }

  .name-container {
    display: flex;
    justify-content: center;
    margin-top: 20px;
    gap: 20px;

    p {
      margin: 0px;
      font-size: 20px;
      font-weight: bold;
    }
  }
  .profile-info {
    div {
      display: flex;
      justify-content: center;
      gap: 20px;
      font-size: 20px;
      font-weight: bold;
    }
  }
`;
