import React from "react";
import { Button } from "@chakra-ui/react";

interface Props {
  content: string;
}
function FormButtonComponent({ content }: Props) {
  return (
    <Button
      colorScheme="brand"
      width="100%"
      bg="brand.300"
      color="white"
      size={["sm", "md"]}
      mt="3rem"
      _active={{ bg: "brand.300", opacity: ".5" }}
      type="submit"
    >
      {content}
    </Button>
  );
}

export default FormButtonComponent;
