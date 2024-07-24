import React from "react";
import { Flex, Button } from "@chakra-ui/react";

interface Props {
  content: string;
}
function FormButtonComponent({ content }: Props) {
  return (
    <Button
      width="100%"
      bg="brand.300"
      color="white"
      size={["sm", "md"]}
      mt="3rem"
    >
      {content}
    </Button>
  );
}

export default FormButtonComponent;
