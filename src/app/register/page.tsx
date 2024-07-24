// import ButtonComponent from "@/components/ButtonComponent";
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
  Text,
  FormHelperText
} from "@chakra-ui/react";

function Register() {
  return (
    <Container
      minH="100vh"
      display="flex"
      flexDir="column"
      justifyContent={["start", "center"]}
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
      <Box>
        <Heading fontSize={["1.3rem", "1.5rem"]} mb=".5rem">
          Create account
        </Heading>
        <Text color="grey" fontSize={[".8rem", "1rem"]}>
          Let’s get you started sharing your links!
        </Text>
      </Box>

      <VStack mt="2.5rem" spacing="1rem">
        <FormControl isRequired>
          <FormLabel fontSize={[".7rem", ".8rem"]}>Email address</FormLabel>
          <InputGroupComponent
            src="/images/icon-mail.svg"
            placeholder="e.g. alex@email.com"
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel fontSize={[".7rem", ".8rem"]}>Create password</FormLabel>
          <InputGroupComponent
            src="/images/icon-lock.svg"
            placeholder="At least 8 characters"
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel fontSize={[".7rem", ".8rem"]}>Confirm password</FormLabel>
          <InputGroupComponent
            src="/images/icon-lock.svg"
            placeholder="At least 8 characters"
          />
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
        <Text fontSize=".8rem" color="brand.500">
          Login
        </Text>
      </Flex>
    </Container>
  );
}

export default Register;
