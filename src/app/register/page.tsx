// import ButtonComponent from "@/components/ButtonComponent";
"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import FormButtonComponent from "@/components/FormButtonComponent";
import InputGroupComponent from "@/components/InputGroup";
import {
  Container,
  Flex,
  Heading,
  Image,
  Box,
  FormLabel,
  VStack,
  FormControl,
  FormHelperText,
  Text,
  FormErrorMessage,
  Link
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";

const schema = yup.object().shape({
  email: yup.string().email("Invalid email format").required("Can't be empty"),
  password: yup
    .string()
    .min(8, "Passowrd must contain at least 8 characters")
    .required("Please check again"),
  confirm_password: yup
    .string()
    .oneOf([yup.ref("password"), undefined], "Passwords must match")
    .required("Please check again")
});

type LoginFormInputs = {
  email: string;
  password: string;
  confirm_password: string;
};

function Register() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginFormInputs>({
    resolver: yupResolver(schema)
  });

  const onSubmit: SubmitHandler<LoginFormInputs> = (data) => {
    // console.log(data);
    router.push("/");
  };

  return (
    <Container
      maxWidth="100%"
      minH="100vh"
      display="flex"
      flexDir="column"
      alignItems={["start", "center"]}
      justifyContent={["start", "center"]}
      bg="#FAFAFA"
    >
      <Flex
        align="center"
        justify={["start", "center"]}
        mt="1.5rem"
        mb="2.5rem"
      >
        <Image src="/images/icon-logo.svg" alt="Logo" mr=".5rem" />
        <Image src="/images/icon-logo-text.svg" alt="devlinks" width="6rem" />
      </Flex>
      <Box bg="white" width="35rem" p="2.5rem">
        <Box>
          <Heading fontSize={["1.3rem", "1.5rem"]} mb=".5rem">
            Login
          </Heading>
          <Text color="grey" fontSize={[".8rem", "1rem"]}>
            Add your details below to get back into the app
          </Text>
        </Box>
        <VStack
          mt="2.5rem"
          spacing="1rem"
          as="form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <FormControl isRequired isInvalid={!!errors.email}>
            <FormLabel fontSize={[".7rem", ".8rem"]}>Email address</FormLabel>
            <InputGroupComponent
              inputtype="email"
              src="/images/icon-mail.svg"
              placeholder="e.g. alex@email.com"
              {...register("email")}
            />
            <FormErrorMessage>
              {errors.email && errors.email.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isRequired isInvalid={!!errors.password}>
            <FormLabel fontSize={[".7rem", ".8rem"]}>Create password</FormLabel>
            <InputGroupComponent
              inputtype="password"
              src="/images/icon-lock.svg"
              placeholder="At least 8 characters"
              {...register("password")}
            />
            <FormErrorMessage>
              {errors.password && errors.password.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isRequired isInvalid={!!errors.confirm_password}>
            <FormLabel fontSize={[".7rem", ".8rem"]}>
              Confirm password
            </FormLabel>
            <InputGroupComponent
              inputtype="password"
              src="/images/icon-lock.svg"
              placeholder="At least 8 characters"
              {...register("confirm_password")}
            />
            <FormErrorMessage>
              {errors.confirm_password && errors.confirm_password.message}
            </FormErrorMessage>
            <FormHelperText fontSize=".6rem" color="grey">
              Password must contain at least 8 characters
            </FormHelperText>
          </FormControl>
          <FormButtonComponent content="Create new account" />
        </VStack>
        <Flex
          m="1.5rem"
          justify="center"
          align="center"
          flexDir={["column", "row"]}
        >
          <Text fontSize=".8rem" color="grey" mr={["0", ".5rem"]}>
            Already have an account?
          </Text>
          <Link href="/login">
            <Text fontSize=".8rem" color="brand.500">
              Login
            </Text>
          </Link>
        </Flex>
      </Box>
    </Container>
  );
}

export default Register;
