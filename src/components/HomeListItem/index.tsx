import React from "react";

import { Container, Title, Subtitle, Image } from "./styles";

interface HomeListItemProps {
  title: string;
  subtitle: string;
  image: string;
  reversed?: boolean;
  video?: string;
}

const HomeListItem: React.FC<HomeListItemProps> = ({
  title,
  subtitle,
  image,
  reversed = false,
  video,
}) => {
  return (
    <Container reversed={reversed}>
      <div>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </div>
      <Image src={image} />

    </Container>
  );
};

export default HomeListItem;
