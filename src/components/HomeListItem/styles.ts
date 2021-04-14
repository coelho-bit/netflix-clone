import styled from "styled-components";

export const Container = styled.div<{ reversed: boolean }>`
  display: flex;
  width: 80%;
  max-width: 1100px;
  margin: auto;
  gap: 20px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 20px;

  @media (min-width: 960px) {
    flex-direction: ${(props) => props.reversed ? "row-reverse" : "row"};
    padding-inline: 40px;
  }
`;

export const Title = styled.h3`
  font-size: 3.5rem;
  text-align: center;
  font-weight: 700;
  color: rgb(255, 255, 255);
  @media (min-width: 960px) {
    text-align: left;
  }
`;

export const Subtitle = styled.p`
  font-size: 2rem;
  text-align: center;
  font-weight: 400;
  color: rgb(255, 255, 255);
  @media (min-width: 960px) {
    text-align: left;
  }
`;

export const Image = styled.img`
  width: 90%;

  @media (min-width: 960px) {
    width: 40%;
  }
`;
