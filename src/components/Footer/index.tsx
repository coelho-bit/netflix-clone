import React from 'react';

import { Container, Title, Links, Link, Bottom } from './styles';

const Footer: React.FC = () => {
  return <Container>
      <Title>Dúvidas? Ligue 0800-761-4631</Title>
      <Links>
        <Link>Perguntas frequentes</Link>
        <Link>Imprensa</Link>
        <Link>Regatar cartão pré-pago</Link>
        <Link>Termos de uso</Link>
        <Link>Informações corporativas</Link>
        <Link>Avisos legais</Link>
        <Link>Centro de ajuda</Link>
        <Link>Relações com investidores</Link>
        <Link>Comprar cartão pré-pago</Link>
        <Link>Privacidade</Link>
        <Link>Entre em contato</Link>
        <Link>Originais Netflix</Link>
        <Link>Conta</Link>
        <Link>Carreiras</Link>
        <Link>Formas de assistir</Link>
        <Link>Preferências de cookies</Link>
        <Link>Teste de velocidade</Link>
      </Links>
      <Bottom>Netflix Brasil</Bottom>
  </Container>
}

export default Footer;