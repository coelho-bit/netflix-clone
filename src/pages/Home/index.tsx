import React from "react";

import Divider from "../../components/Divider";
import EmailInput from "../../components/EmailInput/index";

import {
  Container,
  Hero,
  HeroContainer,
  Title,
  Description,
  CommonQuestions,
  CommonQuestionsTitle,
  BottomEmailInput,
} from "./styles";
import Header from "../../components/Header/index";
import HomeListItem from "../../components/HomeListItem/index";
import CommonQuestion from "../../components/CommonQuestion/index";
import Footer from "../../components/Footer";

const Home: React.FC = () => {
  return (
    <Container>
      <Hero>
        <Header />

        <HeroContainer>
          <Title>Filmes, séries e muito mais. Sem limites.</Title>
          <Description marginBottom={20}>
            Assista onde quiser. Cancele quando quiser.
          </Description>

          <EmailInput />
        </HeroContainer>
      </Hero>

      <Divider />

      <HomeListItem
        title="Aproveite na TV."
        subtitle="Assista em Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, aparelhos de Blu-ray e outros dispositivos."
        image="/tv.png"
      />
      <Divider />
      <HomeListItem
        title="Baixe séries para assistir offline."
        subtitle="Salve seus títulos favoritos e sempre tenha algo para assistir."
        image="/mobile.jpg"
        reversed={true}
      />
      <Divider />
      <HomeListItem
        title="Assista quando quiser."
        subtitle="Assista no celular, tablet, Smart TV ou notebook sem pagar a mais por isso."
        image="/device-pile.png"
      />
      <Divider />

      <CommonQuestions>
        <CommonQuestionsTitle>Perguntas Frequentes</CommonQuestionsTitle>
        <CommonQuestion
          question="O que é a Netflix?"
          answer="A Netflix é um serviço de transmissão online que oferece uma ampla variedade de séries, filmes e documentários premiados em milhares de aparelhos conectados à internet.Você pode assistir a quantos filmes e séries quiser, quando e onde quiser, sem comerciais – tudo por um preço mensal bem acessível. Aqui você sempre encontra novidades. A cada semana, adicionamos novas séries e filmes."
        />
        <CommonQuestion
          question="Quanto custa a Netflix?"
          answer="Assista à Netflix no seu celular, tablet, Smart TV, notebook ou aparelho de streaming por uma taxa mensal única. Os planos variam de R$21,90 a R$45,90 por mês. Sem contrato nem taxas extras."
        />
        <CommonQuestion
          question="Onde posso assistir?"
          answer="Assista onde quiser, o quanto quiser e em um número ilimitado de aparelhos. Faça login com sua conta Netflix em netflix.com para começar a assistir no computador ou em qualquer aparelho conectado à Internet compatível com o aplicativo Netflix, como Smart TVs, smartphones, tablets, aparelhos de streaming e videogames.

Você também pode baixar a sua série favorita com o aplicativo Netflix para iOS, Android ou Windows 10. Use downloads para levar a Netflix para onde quiser sem precisar de conexão com a Internet. Leve a Netflix com você para qualquer lugar."
        />
        <CommonQuestion
          question="Como faço para cancelar?"
          answer="A Netflix é flexível. Não há contratos nem compromissos. Você pode cancelar a sua conta na internet com apenas dois cliques. Não há taxa de cancelamento – você pode começar ou encerrar a sua assinatura a qualquer momento."
        />
        <CommonQuestion
          question="O que eu posso assistir na Netflix?"
          answer="A Netflix tem um grande catálogo de filmes, documentários, séries, originais Netflix premiados e muito mais. Assista o quanto quiser, quando quiser."
        />
      </CommonQuestions>

      <BottomEmailInput>
        <EmailInput />
      </BottomEmailInput>
      <Divider />
      <Footer />
    </Container>
  );
};

export default Home;
