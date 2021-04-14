import React from "react";

import { Message } from "./styles";
import { useAuth } from "../../contexts/AuthContext";

const Error: React.FC = () => {
  const { error } = useAuth();

  return <>
    {error && <Message>{error.message}</Message>}
  </>;
};

export default Error;
