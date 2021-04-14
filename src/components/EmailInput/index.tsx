import React from "react";

import { Container, InputDescription, Input, Button } from "./styles";

const EmailInput: React.FC = () => {
  return (
    <Container>
      <InputDescription>Pronto para assistir? Informe seu email para criar ou reiniciar sua assinatura.</InputDescription>
      <Input placeholder="Email" />
      <Button>Vamos lá</Button>
    </Container>
  );
};

export default EmailInput;
