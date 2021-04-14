import React from "react";
import { FormInput } from "../../components/FormInput";
import Header from "../../components/Header";

import { Container, FormWrapper, Title, Button, New, Span } from "./styles";
import { Password, Email } from "../../components/FormInput/Types/Types";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import { useAuth } from '../../contexts/AuthContext';
import Error  from '../../components/Error';

const Login: React.FC = () => {
  let email: string = "";
  let password: string = "";

  const { login, validateError } = useAuth();

  async function handleLogin() {
    try {
      await login(email, password);
      console.log("Logou");
    } catch(e) {
      validateError(e.code);
    }
  }

  return (
    <Container>
      <Header enterButton={false}/>
      <FormWrapper>
        <Title>Entrar</Title>
        <Error/>
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
          <Link to="/signup"><Span> Assine agora</Span></Link>
        </New>
      </FormWrapper>

      <Footer />
    </Container>
  );
};

export default Login;
