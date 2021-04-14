import React, { useState } from "react";

import { Container, Flex, Question, Icon, Answer } from "./styles";

interface CommonQuestionProps {
  question: string;
  answer: string;
}

const CommonQuestion: React.FC<CommonQuestionProps> = ({
  question,
  answer,
}) => {
    
  const [isVisible, setIsVisible] = useState<boolean>(false);

  function handleClick() {
    setIsVisible(!isVisible);
  }

  return (
    <Container onClick={handleClick} >
      <Flex>
        <Question>{question}</Question>
        <Icon>{isVisible ? "x" : "+"}</Icon>
      </Flex>

      { isVisible && <Answer>{answer}</Answer>}
    </Container>
  );
};

export default CommonQuestion;
