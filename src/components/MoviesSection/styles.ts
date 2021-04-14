import styled from "styled-components";

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

export const MoviesWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
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
`;
