import React from "react";

import {
  Flex,
  VStack,
  Image,
  Heading,
  Text,
  Box,
  Button
} from "@chakra-ui/react";

function EmptyList() {
  return (
    <>
      <Flex
        flexDir="column"
        align="start"
        mt="1.5rem"
        bg="#FAFAFA"
        p={["2rem", "4rem"]}
      >
        <VStack spacing="1rem">
          <Image
            alignSelf="center"
            src="/images/icon-start.svg"
            alt="icon-empty"
            width={["8rem", "10rem"]}
          />
          <Heading fontSize={["1.3rem", "1.5rem"]} textAlign="center">
            Let’s get you started
          </Heading>
          <Text
            fontSize={[".8rem", "1rem"]}
            textAlign={["left", "center"]}
            color="grey"
          >
            Use the “Add new link” button to get started. Once you have more
            than one link, you can reorder and edit them. We’re here to help you
            share your profiles with everyone!
          </Text>
        </VStack>
      </Flex>
      <Flex justify="flex-end">
        <Button
          isDisabled={true}
          width={["100%", "5rem"]}
          bg="brand.300"
          color="white"
          size={["sm", "md"]}
          my="3rem"
          _hover={{ bg: "brand.50", color: "brand.500" }}
        >
          Save
        </Button>
      </Flex>
    </>
  );
}

export default EmptyList;
