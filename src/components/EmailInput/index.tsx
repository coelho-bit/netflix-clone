import React, { useRef, useState } from "react";
import { Email } from "../../contexts/Types/Types";

import { Container, InputDescription, Input, Button } from "./styles";
import { useHistory } from "react-router";
import InputError from '../InputError/index';

const EmailInput: React.FC = () => {
  const [error, setError] = useState<string>("");
  let inputRef: React.RefObject<HTMLInputElement> = useRef(null);

  const history = useHistory();

  const input = (): string => {
    return inputRef.current ? inputRef.current.value : "";
  };

  function validateEmail() {
    if (inputRef.current?.value.length === 0) {
      setError("Digite um email.");
    }

    if (!Email.regex.test(input())) {
      setError("Digite um email válido.");
    }

    else {
      history.push("/signup");
    }
  }

  return (
    <Container>
      <InputDescription>
        Pronto para assistir? Informe seu email para criar ou reiniciar sua
        assinatura.
      </InputDescription>
      <Input ref={inputRef} placeholder="Email" />
      <InputError inBlack>{error}</InputError>

      <Button onClick={() => validateEmail()}>Vamos lá</Button>
    </Container>
  );
};

export default EmailInput;
