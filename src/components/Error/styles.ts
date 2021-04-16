import styled from 'styled-components';

export const Message = styled.div<{inBlack?: boolean}>`
  width: 100%;
  background-color: transparent;
  border: 1px solid ${(props) => (props.inBlack ? "#ffa00a" : "#b92d2b")};
  border-radius: 5px;
  padding: 10px 20px;
  margin: 20px 0;
  
  color: ${(props) => (props.inBlack ? "#ffa00a" : "#b92d2b")};
  font-weight: 500;
  font-size: 1.5rem;
`;

