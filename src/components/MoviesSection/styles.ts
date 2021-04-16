import styled, { keyframes } from "styled-components";

const MoviesAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateX(100px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Title = styled.h3`
  font-size: 2rem;
  color: white;
  margin: 10px 0;
  font-weight: 500;
  padding-left: 20px;
`;

export const Grouper = styled.div`
  display: flex;
  position: relative;
  margin-bottom: 30px;
  padding: 20px;
`;

export const Image = styled.img<{position: number}>`
  border-radius: 5px;
  animation-name: ${MoviesAnimation};
  animation-duration: ${(props) => ((props.position + 0.08) * .8)}s;
`

export const MoviesWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  margin: 0 24px;
  gap: 3px;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Navigate = styled.button<{ rightPosition?: boolean }>`
  font-size: 2rem;
  color: white;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.9);
  right: ${(props) => props.rightPosition && 0};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 300px;
  z-index: 999;
`;
