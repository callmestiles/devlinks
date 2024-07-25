import React, { forwardRef } from "react";

import {
  InputGroup,
  InputLeftElement,
  Image,
  Input,
  Box,
  InputProps
} from "@chakra-ui/react";

interface Props extends InputProps {
  src: string;
  placeholder: string;
  inputtype: string;
}

const InputGroupComponent = forwardRef<HTMLInputElement, Props>(
  ({ src, placeholder, inputtype, ...rest }, ref) => {
    return (
      <InputGroup bg="white">
        <InputLeftElement>
          <Image src={src} alt="icon" boxSize={4} />
        </InputLeftElement>
        <Box boxShadow="md" width="100%">
          <Input
            ref={ref}
            type={inputtype}
            placeholder={placeholder}
            _placeholder={{ fontSize: ".8rem" }}
            pl="2.3rem"
            focusBorderColor="brand.200"
            errorBorderColor="#FF3939"
            {...rest}
          />
        </Box>
      </InputGroup>
    );
  }
);

InputGroupComponent.displayName = "InputGroupComponent";

export default InputGroupComponent;
