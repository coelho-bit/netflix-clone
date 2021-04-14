import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 690px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const InputDescription = styled.p`
  margin-bottom: 20px;
  text-align: center;
  color: white;
  font-size: 1.4rem;
  font-weight: 500;
`;

export const Input = styled.input`
  width: 100%;
  background-color: white;
  color: rgb(140, 140, 140);
  border: none;
  padding: 20px;
  border-radius: 2px;
  margin-bottom: 20px;
  font-size: 1.8rem;
  font-weight: 400;
`;

export const Button = styled.button`
  background-color: rgb(220, 5, 17);
  padding: 15px 20px;
  color: white;
  font-weight: 500;
  font-size: 1.6rem;
  border-radius: 2px;
  transition: 0.2s;

  @media (min-width: 960px) {
    position: absolute;
    padding: 22px;
    right: 0;
    top: 43px;
  }
`;
