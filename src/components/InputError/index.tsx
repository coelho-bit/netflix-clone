import React from "react";

import { Span } from "./styles";

const InputError: React.FC<{ inBlack?: boolean }> = ({
  inBlack = false,
  children,
}) => {
  return <Span inBlack={inBlack}>{children}</Span>;
};

export default InputError;
