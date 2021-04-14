import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 50px;
  max-width: 850px;
  margin: 0 auto;
`;

export const Title = styled.h4`
  color: rgb(117, 117, 117);
  font-size: 1.6rem;
  font-weight: 400;
`;

export const Links = styled.div`
  margin: 20px 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
`;
export const Link = styled.a`
  text-decoration: none;
  text-align: left;
  font-size: 1.3rem;
  color: rgb(117, 117, 117);
`;
export const Bottom = styled.span`
  font-size: 1.2rem;
  color: rgb(117, 117, 117);
`;
