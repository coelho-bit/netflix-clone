import React from "react";
import { useHistory } from "react-router";

import { Container, Image, Username } from "./styles";

const User: React.FC<{ user: string }> = ({ user }) => {
  const history = useHistory();

  return (
    <Container onClick={() => history.push("/movies")}>
      <Image src="/user.png" />
      <Username>{user}</Username>
    </Container>
  );
};

export default User;
