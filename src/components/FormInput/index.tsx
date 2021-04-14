import React, { useRef, useState } from "react";

import { Container, Input, Error } from "./styles";

import { InputType, Email, Password } from "./Types/Types";

interface FormInputProps {
  placeholder: string;
  type: InputType;
  callback: (value: string) => {};
  inBlack?: boolean;
}

export const FormInput: React.FC<FormInputProps> = ({
  placeholder,
  type,
  callback,
  inBlack = false,
}) => {
  const [error, setError] = useState<string>();
  let inputRef = useRef<HTMLInputElement>(null);

  function getValue() {
    return inputRef.current?.value === undefined ? "" : inputRef.current?.value;
  }

  function inputHandler() {
    callback(getValue());

    if (type === Email) {
      if (!type.regex.test(getValue()) || getValue() === "") {
        setError("Digite um email válido.");
      } else {
        setError("");
      }
    }

    if (type === Password) {
      if (getValue().length < type.minLength) {
        setError("Sua senha deve ter no mínimo 8 caracteres.");
      } else {
        setError("");
      }
    }
  }

  return (
    <Container>
      <Input
        type={type === Password ? "password" : ""}
        ref={inputRef}
        onBlur={() => inputHandler()}
        placeholder={placeholder}
        inBlack={inBlack}
      />
      {error && <Error inBlack={inBlack}>{error}</Error>}
    </Container>
  );
};

export default Input;
