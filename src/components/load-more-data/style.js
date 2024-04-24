import styled from "styled-components";

export const LoadMoreWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  > .container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;

    .product {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 20px;
      border: 1px solid;
      gap: 10px;

      > img {
        width: 200px;
        height: 200px;
      }
    }
  }
`;
