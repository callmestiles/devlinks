import React from "react";

import { Flex, Image, Text } from "@chakra-ui/react";

function ToastComponent() {
  return (
    <Flex
      width="max-content"
      color="white"
      px={"2.5rem"}
      py={"1rem"}
      bg="black"
      borderRadius=".8rem"
      mb="3rem"
      justify="center"
      align="center"
    >
      <Image src="/images/icon-disk.svg" alt="icon-saved" mr=".5rem" />
      <Text>Your changes has been successfully saved!</Text>
    </Flex>
  );
}

export default ToastComponent;
