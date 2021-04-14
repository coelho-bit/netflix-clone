import React from "react";
import Header from "../../components/Header";

import {
  Container,
  ContentWrapper,
  Image,
  Title,
  Subtitle,
  Button,
} from "./styles";
import Footer from "../../components/Footer";
import { Link, useHistory } from "react-router-dom";
import { FormInput } from "../../components/FormInput/index";
import { Email, Password } from "../../components/FormInput/Types/Types";
import { useAuth } from '../../contexts/AuthContext';
import Error from '../../components/Error/index';

const Registration: React.FC = ({ children }) => {
  return (
    <Container>
      <Header hasBorder />
      <ContentWrapper>{children}</ContentWrapper>
      <Footer />
    </Container>
  );
};

export const Confirmation: React.FC = () => {
  return (
    <Registration>
      <Image src="/devices.png" />
      <Title>Termine de configurar sua conta.</Title>
      <Subtitle>
        A Netflix é personalizada para você. Crie uma senha para assistir à
        Netflix em qualquer aparelho quando você quiser.
      </Subtitle>
      <Link to={"/signup/register"}>
        <Button>Continuar</Button>
      </Link>
    </Registration>
  );
};

export const Form: React.FC = () => {
  const { signup, validateError } = useAuth();
  const history = useHistory();

  let email: string = "";
  let password: string = "";

  async function createUserWithEmailAndPassword() {
    try {
      await signup(email, password);
      history.push("/login");
    } catch(e) {
      validateError(e.code);
      console.log(e);
    }
  }

  return (
    <Registration>
      <Title>Crie uma senha para iniciar sua assinatura.</Title>
      <Subtitle>
        Faltam só mais alguns passos! Nós também detestamos formulários.
      </Subtitle>
      <Error/>
      <FormInput
        callback={(value: string) => (email = value)}
        placeholder="Email"
        type={Email}
      />
      <FormInput
        callback={(value: string) => (password = value)}
        placeholder="Adicione uma senha"
        type={Password}
      />
      <Button onClick={createUserWithEmailAndPassword}>Continuar</Button>
    </Registration>
  );
};
