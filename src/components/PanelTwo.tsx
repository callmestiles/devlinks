"use client";

import React from "react";

import { useState, useRef, useEffect, ChangeEvent } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

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

import { db } from "../../utils/firebase";
import { ref, set, onValue } from "firebase/database";
import { useToast } from "@chakra-ui/react";
import ToastComponent from "./ToastComponent";
import { lstat } from "fs";

interface ProfileData {
  imageSrc: string | null;
  firstName: string;
  lastName: string;
  email: string;
}

const schema = yup.object().shape({
  firstName: yup.string().required("Can't be empty"),
  lastName: yup.string().required("Can't be empty"),
  email: yup.string().email("Invalid email format").required("Can't be empty")
});

type LoginFormInputs = {
  firstName: string;
  lastName: string;
  email: string;
};

function PanelTwo() {
  const toast = useToast();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginFormInputs>({
    resolver: yupResolver(schema)
  });

  const onSubmit: SubmitHandler<LoginFormInputs> = (data) => {
    // console.log(data);
  };

  const handleBoxClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    if (file) {
      setImageSrc(URL.createObjectURL(file));
    }
  };

  useEffect(() => {
    const profileDataRef = ref(db, "profileData");
    onValue(profileDataRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setImageSrc(data.imageSrc);
        setFirstName(data.firstName);
        setLastName(data.lastName);
        setEmail(data.email);
      }
    });
  }, []);

  const handleSave = () => {
    const newItem: ProfileData = { imageSrc, firstName, lastName, email };
    set(ref(db, "profileData"), newItem)
      .then(() => {
        toast({
            position: "bottom",
            render: () => <ToastComponent />
          });
      })
      .catch((error) => {
        console.error("Failed to save data: ", error);
      });
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
          <Box boxShadow="lg" width="100%" flexBasis={["100%", "50%"]}>
            <Input
              _placeholder={{ fontSize: [".7rem", ".9rem"] }}
              focusBorderColor="brand.200"
              bg="white"
              name="firstName"
              type="text"
              placeholder="Ben"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </Box>
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
          <Box boxShadow="lg" width="100%" flexBasis={["100%", "50%"]}>
            <Input
              _placeholder={{ fontSize: [".7rem", ".9rem"] }}
              focusBorderColor="brand.200"
              bg="white"
              name="lastName"
              type="text"
              placeholder="Wright"
              onChange={(e) => setLastName(e.target.value)}
            />
          </Box>
        </FormControl>

        <FormControl
          display="flex"
          flexDir={["column", "row"]}
          alignItems={["start", "center"]}
        >
          <FormLabel fontSize={[".7rem", ".9rem"]} flexGrow={["0", "1"]}>
            Email
          </FormLabel>
          <Box boxShadow="lg" width="100%" flexBasis={["100%", "50%"]}>
            <Input
              _placeholder={{ fontSize: [".7rem", ".9rem"] }}
              focusBorderColor="brand.200"
              bg="white"
              name="email"
              type="email"
              placeholder="ben@example.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Box>
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
