import React from "react";

import { Container, Image, Title, Subtitle, Button } from "./styles";

interface RegistrationStepProps {
  image?: string;
  title: string;
  subtitle: string;
  onClick: Function;
}

const RegistrationStep: React.FC<RegistrationStepProps> = ({
  image,
  title,
  subtitle,
  onClick,
  children
}) => {
  return (
    <Container>
      {image && <Image src={image} />}
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
      {children}
      <Button onClick={() => onClick}>Continuar</Button>
    </Container>
  );
};

export default RegistrationStep;
