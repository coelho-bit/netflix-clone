import React from "react";

import { Container, Title } from "./styles";
import Header from "../../components/Header/index";
import User from "../../components/User/index";

const Users: React.FC = () => {
  return (
    <>
      <Header enterButton={false} />
      <Container>
        <Title>Quem está assistindo?</Title>
        <User user="Jorelson" />
      </Container>
    </>
  );
};

export default Users;
