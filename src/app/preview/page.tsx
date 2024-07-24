"use client";
import {
  Button,
  Container,
  Flex,
  Spacer,
  Image,
  Heading,
  Text,
  Box,
  VStack
} from "@chakra-ui/react";
import React from "react";
import { css } from "@emotion/react";

function Preview() {
  return (
    <>
      <Box
        display={["none", "block"]}
        css={css`
          position: relative;
          &::before {
            content: "";
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 50vh;
            background-color: #633cff;
            z-index: -999;
            border-bottom-left-radius: 1.5rem;
            border-bottom-right-radius: 1.5rem;
          }
        `}
      >
        {" "}
      </Box>
      <Container maxW="100%" display="flex" flexDir="column" maxH={["100vh"]}>
        <Flex mt="1rem" p={["0", ".6rem"]} bg="white" borderRadius=".6rem">
          <Button
            size="sm"
            bg="white"
            border="1px"
            borderColor="brand.500"
            color="brand.500"
          >
            Back to Editor
          </Button>
          <Spacer />
          <Button size="sm" bg="brand.500" color="white">
            Share Link
          </Button>
        </Flex>

        <Flex justify="center" my={["3rem", "7rem"]}>
          <Flex
            flexDir="column"
            align="center"
            width={["80%", "18rem"]}
            p={["0", "1.5rem"]}
            borderRadius={["0", ".8rem"]}
            bg="white"
          >
            <Image
              src="/images/icon-avatar-2.svg"
              alt="Profile picture"
              blockSize="6rem"
              mb="1rem"
            />
            <Heading fontSize="1.5rem" mb=".2rem">
              Ben Wright
            </Heading>
            <Text fontSize=".8rem" color="grey" mb="2.5rem">
              ben@example.com
            </Text>
            <VStack width="100%" spacing="1rem">
              <Flex
                width="100%"
                align="center"
                bg="black"
                p=".5rem"
                borderRadius=".5rem"
              >
                <Image
                  src="/images/icon-github.svg"
                  alt="Icon-github"
                  mr=".5rem"
                />
                <Text color="white">Github</Text>
                <Spacer />
                <Image src="/images/icon-arrow-right.svg" alt="icon-right" />
              </Flex>
              <Flex
                width="100%"
                align="center"
                bg="black"
                p=".5rem"
                borderRadius=".5rem"
              >
                <Image
                  src="/images/icon-github.svg"
                  alt="Icon-github"
                  mr=".5rem"
                />
                <Text color="white">Github</Text>
                <Spacer />
                <Image src="/images/icon-arrow-right.svg" alt="icon-right" />
              </Flex>
            </VStack>
          </Flex>
        </Flex>
      </Container>
    </>
  );
}

export default Preview;
