import styled from "styled-components";

export const Span = styled.span<{ inBlack?: boolean }>`
  font-weight: 500;
  font-size: 1.6rem;
  color: ${(props) => (props.inBlack ? "#ffa00a" : "#b92d2b")};
`;
