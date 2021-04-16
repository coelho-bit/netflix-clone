import React, { FormEvent, useState } from "react";
import { FormInput } from "../../components/FormInput";
import Header from "../../components/Header";

import { Container, FormWrapper, Title, Button, New, Span } from "./styles";
import { Password, Email } from "../../contexts/Types/Types";
import { Link, useHistory } from "react-router-dom";
import Footer from "../../components/Footer";
import { FirebaseError, useAuth } from "../../contexts/AuthContext";
import Error from "../../components/Error";

let email: string = "";
let password: string = "";

const Login: React.FC = () => {
  const { login, validateLoginError } = useAuth();
  const [error, setError] = useState<FirebaseError>();

  const history = useHistory();

  async function handleLogin() {
    try {
      await login(email, password);
      history.push("/users");
    } catch (e) {
      setError(validateLoginError(e.code));
    }
  }

  return (
    <Container>
      <Header enterButton={false} />
      <FormWrapper onSubmit={(e: FormEvent) => e.preventDefault()}>
        <Title>Entrar</Title>
        {error && <Error inBlack={true}>{error.message}</Error>}
        <FormInput
          inBlack
          type={Email}
          callback={(value: string) => (email = value)}
          placeholder="Email"
        />
        <FormInput
          inBlack
          type={Password}
          callback={(value: string) => (password = value)}
          placeholder="Senha"
        />
        <Button onClick={handleLogin}>Entrar</Button>
        <New>
          Novo por aqui?
          <Link to="/signup">
            <Span> Assine agora</Span>
          </Link>
        </New>
      </FormWrapper>

      <Footer />
    </Container>
  );
};

export default Login;
