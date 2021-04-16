import React from "react";

import { Message } from "./styles";

const Error: React.FC<{ inBlack?: boolean }> = ({
  inBlack = false,
  children,
}) => {
  return (
    <>
      <Message inBlack={inBlack}>{children}</Message>
    </>
  );
};

export default Error;
