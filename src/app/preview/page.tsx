"use client";
import {
  Button,
  Container,
  Flex,
  Spacer,
  Image,
  Heading,
  Text,
  Link,
  Box,
  VStack,
  Avatar
} from "@chakra-ui/react";
import React from "react";
import { css } from "@emotion/react";

interface Menu {
  src: string;
  alt: string;
  text: string;
}

interface LinkData {
  selectedMenu: Menu | null;
  inputValue: string;
}

interface ProfileData {
  imageSrc: string | null;
  firstName: string;
  lastName: string;
  email: string;
}

function Preview() {
  const profileItem = localStorage.getItem("profileData");
  const profile: ProfileData[] | null = profileItem
    ? JSON.parse(profileItem)
    : null;

  const linkItem = localStorage.getItem("links");
  const links: LinkData[] | null = linkItem ? JSON.parse(linkItem) : null;
  return (
    <>
      {console.log(links)}
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
      <Container maxW="100%" display="flex" flexDir="column" minH={["100vh"]}>
        <Flex mt="1rem" p={["0", ".6rem"]} bg="white" borderRadius=".6rem">
          <Link href="/">
            <Button
              size="sm"
              bg="white"
              border="1px"
              borderColor="brand.500"
              color="brand.500"
            >
              Back to Editor
            </Button>
          </Link>
          <Spacer />
          <Button size="sm" bg="brand.500" color="white">
            Share Link
          </Button>
        </Flex>

        <Flex justify="center" my={["3rem", "7rem"]}>
          <Flex
            flexDir="column"
            align="center"
            width={["80%", "20rem"]}
            p={["0", "3rem"]}
            borderRadius={["0", ".8rem"]}
            bg="white"
            boxShadow="lg"
          >
            <Avatar
              src="/images/icon-avatar-2.svg"
              name="Profile picture"
              size="xl"
              mb="1rem"
            />
            {profile && profile.length > 0 && (
              <>
                <Heading fontSize="1.5rem" mb=".2rem">
                  {profile[0].firstName} {profile[0].lastName}
                </Heading>
                <Text fontSize=".8rem" color="grey" mb="2.5rem">
                  {profile[0].email}
                </Text>
              </>
            )}
            <VStack width="100%" spacing="1rem">
              {links &&
                links.map(
                  (link, index) =>
                    link.selectedMenu && (
                      <Flex
                        key={index}
                        width="100%"
                        align="center"
                        bg="black"
                        p=".5rem"
                        borderRadius=".5rem"
                      >
                        <Image
                          src={link.selectedMenu.src}
                          alt={link.selectedMenu.alt}
                          mr=".5rem"
                        />
                        <Text color="white">{link.selectedMenu.text}</Text>
                        <Spacer />
                        <Image
                          src="/images/icon-arrow-right.svg"
                          alt="icon-right"
                        />
                      </Flex>
                    )
                )}
            </VStack>
          </Flex>
        </Flex>
      </Container>
    </>
  );
}

export default Preview;
