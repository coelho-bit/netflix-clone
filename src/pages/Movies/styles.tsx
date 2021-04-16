import styled, { keyframes } from "styled-components";

const FeaturedAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateX(100px);
  }
  
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Loading = styled.div`
  height: 100vh;
  width: 100%;
  background-color: black;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center
`

export const Container = styled.div`
  width: 100%;
  background-color: #141414;
`;

export const Featured = styled.div<{ url: string }>`
  height: 90vh;
  width: 100%;
  background-image: linear-gradient(
      to left,
      rgba(0, 0, 0, 0.3),
      rgba(0, 0, 0, 0.8)
    ),
    url(${(props) => props.url});
  background-size: cover;
  background-position: center;
  padding: 0 70px;
`;

export const FeaturedContent = styled.div`
  width: 100%;
  height: 100%;
  max-width: 900px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  animation-name: ${FeaturedAnimation};
  animation-duration: 1s;
`;

export const Title = styled.h1`
  text-transform: uppercase;
  font-weight: 700;
  font-size: 4.5rem;
  color: white;
  letter-spacing: 0.5rem;
  margin-bottom: 20px;
`;
export const Description = styled.p`
  font-size: 1.6rem;
  color: white;
  font-weight: 500;
  margin-bottom: 20px;
`;
export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;
export const Watch = styled.button`
  background-color: white;
  padding: 10px 20px;
  font-weight: 700;
  font-size: 2rem;
  color: black;
  border-radius: 5px;
`;
export const Informations = styled.button`
  background-color: rgba(109, 109, 110, 0.7);
  padding: 10px 20px;
  font-size: 2rem;
  font-weight: 700;
  border-radius: 5px;
  color: white;
`;
