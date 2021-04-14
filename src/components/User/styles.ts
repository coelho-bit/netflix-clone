import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  background-color: transparent;
  gap: 5px;
  padding: 0;
  flex-direction: column;
  align-items: center;

  &:hover {
    > img {
      border: 2px solid white;
    }

    > strong {
      color: white;
    }
  }
`;

export const Image = styled.img`
  border-radius: 5px;
  margin: 0;
  width: 15vw;
  margin: 10px;
`;

export const Username = styled.strong`
  font-size: 1.6rem;
  font-weight: 500;
  color: gray;
`;
