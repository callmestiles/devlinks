"use client";
import React from "react";

import { useState, useRef, ChangeEvent } from "react";
import {
  Box,
  Heading,
  Text,
  Flex,
  Image,
  Button,
  Input,
  VStack,
  FormControl,
  FormLabel
} from "@chakra-ui/react";

interface ProfileData {
  imageSrc: string | null;
  firstName: string;
  lastName: string;
  email: string;
}

function PanelTwo() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const handleBoxClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    if (file) {
      setImageSrc(URL.createObjectURL(file));
    }
  };

  const handleSave = () => {
    const existingData: ProfileData[] = JSON.parse(
      localStorage.getItem("profileData") || "[]"
    );
    const newItem: ProfileData = { imageSrc, firstName, lastName, email };
    const isDuplicate = existingData.some(
      (item: ProfileData) =>
        item.firstName === newItem.firstName &&
        item.lastName === newItem.lastName &&
        item.email === newItem.email
    );
    if (!isDuplicate) {
      const updatedData = [...existingData, newItem];
      localStorage.setItem("profileData", JSON.stringify(updatedData));
    }
  };

  return (
    <Flex direction="column">
      <Box my="1.5rem">
        <Heading fontSize={["1.3rem", "1.5rem"]} mb=".5rem">
          Profile Details
        </Heading>
        <Text fontSize={[".8rem", "1rem"]}>
          Add your details to create a personal touch to your profile.
        </Text>
      </Box>

      <Flex
        bg="#FAFAFA"
        p=".8rem"
        align={["start", "center"]}
        flexDir={["column", "row"]}
      >
        <Text color="grey" fontSize=".8rem" flexGrow={["0", "1"]}>
          Profile picture
        </Text>
        <Box
          width="10rem"
          height="10rem"
          bg="brand.50"
          display="flex"
          my="1rem"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          overflow="hidden"
          borderRadius=".6rem"
          cursor="pointer"
          onClick={handleBoxClick}
        >
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt="Uploaded"
              boxSize="100%"
              objectFit="cover"
              overflow="hidden"
            />
          ) : (
            <>
              <Image
                src="/images/icon-image-upload.svg"
                alt="icon-image-upload"
              />
              <Text fontSize=".8rem" color="brand.500" fontWeight="600">
                + Upload Image
              </Text>
            </>
          )}
          <input
            type="file"
            accept="image/png, image/jpeg"
            style={{ display: "none" }}
            ref={fileInputRef}
            onChange={handleFileChange}
          />
        </Box>
        <Text
          color="grey"
          fontSize={[".6rem", ".8rem"]}
          mx={["0", "1.5rem"]}
          flexBasis={["0", "20%", "30%"]}
        >
          Image must be below 1024x1024px. Use PNG or JPG format.
        </Text>
      </Flex>

      <VStack bg="#FAFAFA" p=".8rem" mt="1rem" spacing="1rem">
        <FormControl
          display="flex"
          flexDir={["column", "row"]}
          alignItems={["start", "center"]}
          isRequired
        >
          <FormLabel fontSize={[".7rem", ".9rem"]} flexGrow={["0", "1"]}>
            First name
          </FormLabel>
          <Input
            flexBasis={["100%", "50%"]}
            _placeholder={{ fontSize: [".7rem", ".9rem"] }}
            bg="white"
            name="firstName"
            type="text"
            placeholder="Ben"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </FormControl>
        <FormControl
          display="flex"
          flexDir={["column", "row"]}
          alignItems={["start", "center"]}
          isRequired
        >
          <FormLabel fontSize={[".7rem", ".9rem"]} flexGrow={["0", "1"]}>
            Last name
          </FormLabel>
          <Input
            flexBasis={["100%", "50%"]}
            _placeholder={{ fontSize: [".7rem", ".9rem"] }}
            bg="white"
            name="lastName"
            type="text"
            placeholder="Wright"
            onChange={(e) => setLastName(e.target.value)}
          />
        </FormControl>
        <FormControl
          display="flex"
          flexDir={["column", "row"]}
          alignItems={["start", "center"]}
        >
          <FormLabel fontSize={[".7rem", ".9rem"]} flexGrow={["0", "1"]}>
            Email
          </FormLabel>
          <Input
            flexBasis={["100%", "50%"]}
            _placeholder={{ fontSize: [".7rem", ".9rem"] }}
            bg="white"
            name="email"
            type="email"
            placeholder="ben@example.com"
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>
      </VStack>
      <Flex justify="flex-end">
        <Button
          width={["100%", "5rem"]}
          bg="brand.300"
          color="white"
          size={["sm", "md"]}
          onClick={handleSave}
          my="3rem"
        >
          Save
        </Button>
      </Flex>
    </Flex>
  );
}

export default PanelTwo;
