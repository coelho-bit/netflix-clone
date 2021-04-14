import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const Input = styled.input<{ inBlack: boolean }>`
  width: 100%;
  background-color: ${(props) => (props.inBlack ? "#333" : "transparent")};
  border: ${(props) => (props.inBlack ? "none" : "1px solid rgb(117, 117, 117)")} ;
  border-radius: ${(props) => (props.inBlack ? "5px" : "0")};
  padding: 15px;
  font-weight: 600;
  font-size: 2rem;
  color: ${(props) => (props.inBlack && "white")};
  margin-top: 20px;
`;

export const Error = styled.span<{ inBlack?: boolean }>`
  color: ${(props) => props.inBlack ? "#e87c03": "#b92d2b"} ;
  font-weight: 400;
  font-size: 1.4rem;
`;
