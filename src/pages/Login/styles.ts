import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: black;

  @media (min-width: 750px) {
    background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, .9)),
    url("/bg-hero.jpg");
  }
`;

export const FormWrapper = styled.div`
  width: 90%;
  max-width: 500px;
  margin: 50px auto;

  @media (min-width: 750px) {
    width: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    padding: 70px;
  }
`;

export const Title = styled.h1`
    font-size: 3rem;
    color: #fafafa;
    font-weight: 600;
`;
export const Button = styled.button`
    margin-top: 30px;
    width: 100%;
    background-color: #e50914;
    padding: 15px;
    font-size: 2rem;
    color: white;
    border-radius: 5px;
    font-weight: 500;
`;
export const New = styled.div`
    margin-top: 20px;
    font-size: 1.8rem;
    color: rgb(110, 110, 110);
`;
export const Span = styled.span`
    color: white;
    font-size: 1.8rem;
`;
