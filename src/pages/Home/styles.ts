import styled from 'styled-components';

interface DescriptionProps {
  marginBottom?: number;
}

export const Container = styled.div`
  background-color: black;
`

export const Hero = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.9)),
    url("/bg-hero.jpg");
  width: 100%;
`;

export const HeroContainer = styled.div`
  padding: 180px 40px;
`;

export const Title = styled.h1`
  margin: 0 auto 20px auto;
  width: 90%;
  max-width: 900px;
  min-width: 288px; 
  color: white;
  text-align: center;
  font-size: 3.125rem;
  font-weight: 700;

  @media (min-width: 900px) {
    font-size: 5rem;
  }

`;

export const Description = styled.p<DescriptionProps>`
  margin-bottom: ${(props) => props.marginBottom}px;
  text-align: center;
  color: white;
  font-size: 1.8rem;
  font-weight: 600;
`;


export const CommonQuestions = styled.div`
  width: 100%;
  max-width: 800px;
  margin: auto;
  padding: 100px 0;
`;

export const CommonQuestionsTitle = styled.h3`
  margin-bottom: 20px;
  font-size: 2.5rem;
  text-align: center;
  color: white;
  font-weight: 700;
`;

export const BottomEmailInput = styled.div`
  padding-inline: 40px;
  padding-bottom: 50px;
`;

