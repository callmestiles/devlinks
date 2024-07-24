import React from "react";
import { InputGroup, InputLeftElement, Image, Input } from "@chakra-ui/react";

interface Props {
  src: string;
  placeholder: string;
}
function InputGroupComponent({ src, placeholder }: Props) {
  return (
    <InputGroup bg="white">
      <InputLeftElement>
        <Image src={src} alt="icon" boxSize={4} />
      </InputLeftElement>
      <Input
        type="text"
        placeholder={placeholder}
        _placeholder={{ fontSize: ".8rem" }}
        pl="2.3rem"
      />
    </InputGroup>
  );
}

export default InputGroupComponent;
