import React from "react";
import { Input } from "@chakra-ui/react";

interface Props {
  placeholder: string;
}
function InputComponent({ placeholder }: Props) {
  return (
    <Input
      flexBasis={["100%", "50%"]}
      bg="white"
      _placeholder={{ fontSize: [".7rem", ".9rem"] }}
      placeholder={placeholder}
      type="text"
    />
  );
}

export default InputComponent;
