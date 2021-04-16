import React, { useRef, useState } from "react";

import { Container, Input } from "./styles";

import { InputType, Email, Password } from "../../contexts/Types/Types";
import InputError from "../InputError/index";

interface FormInputProps {
  placeholder: string;
  type: InputType;
  callback: (value: string) => void;
  inBlack?: boolean;
}

export const FormInput: React.FC<FormInputProps> = ({
  placeholder,
  type,
  callback,
  inBlack = false,
}) => {
  // const { set } = useForm();
  const [error, setError] = useState<string>();
  let inputRef = useRef<HTMLInputElement>(null);

  function getValue() {
    return inputRef.current?.value === undefined ? "" : inputRef.current?.value;
  }

  function inputHandler() {
    if (type === Email) {
      if (!type.regex.test(getValue()) || getValue() === "") {
        setError("Digite um email válido.");
      } else {
        setError("");
      }
    }

    if (type === Password) {
      if (getValue().length < type.minLength) {
        setError(`Sua senha deve ter no mínimo ${type.minLength} caracteres.`);
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
        onChange={() => {
          callback(getValue())
        }}
        onBlur={() => inputHandler()}
        placeholder={placeholder}
        inBlack={inBlack}
      />
      {error && <InputError inBlack={inBlack}>{error}</InputError>}
    </Container>
  );
};

export default Input;
