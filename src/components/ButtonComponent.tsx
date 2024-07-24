import React from "react";
import { Flex, Button } from "@chakra-ui/react";
interface Props {
  content: string;
}
function ButtonComponent({ content }: Props) {
  return (
    <Flex justify="flex-end">
      <Button
        width={["100%", "5rem"]}
        bg="brand.300"
        color="white"
        size={["sm", "md"]}
        mt="3rem"
      >
        {content}
      </Button>
    </Flex>
  );
}

export default ButtonComponent;
