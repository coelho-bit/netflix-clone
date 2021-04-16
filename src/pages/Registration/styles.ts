import styled, { keyframes } from "styled-components";

const ContentAnimation = keyframes`
  from { 
    opacity: 0;
    transform: translateX(20px);
  } to {
    opacity: 1; 
    transform: translateX(0);
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

export const ContentWrapper = styled.div`
  display: flex;
  gap: 10px;
  height: max(50vh, 700px);
  width: 80%;
  max-width: 450px;
  margin: 0 auto;
  flex-direction: column;
  justify-content: center;
  animation-name: ${ContentAnimation};
  animation-duration: .5s;
`;

export const Image = styled.img`
  width: 100%;
`;

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: 600;
  color: black;
`;

export const Subtitle = styled.p`
  font-size: 2rem;
  font-weight: 400;
  color: rgb(40, 40, 40);
`;

export const Button = styled.button`
  margin-top: 20px;
  width: 100%;
  background-color: #e50914;
  color: white;
  font-size: 2rem;
  padding: 10px 20px;
`;
