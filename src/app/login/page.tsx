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
  Text
} from "@chakra-ui/react";

function Login() {
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
      <Box bg="white">
        <Heading fontSize={["1.3rem", "1.5rem"]} mb=".5rem">
          Login
        </Heading>
        <Text color="grey" fontSize={[".8rem", "1rem"]}>
          Add your details below to get back into the app
        </Text>
      </Box>

      <VStack mt="2.5rem" spacing="1rem">
        <FormControl isRequired>
          <FormLabel fontSize={[".7rem", ".8rem"]}>Email</FormLabel>
          <InputGroupComponent
            src="/images/icon-mail.svg"
            placeholder="e.g. alex@email.com"
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel fontSize={[".7rem", ".8rem"]}>Password</FormLabel>
          <InputGroupComponent
            src="/images/icon-lock.svg"
            placeholder="Enter your password"
          />
        </FormControl>
        <FormButtonComponent content="Login" />
      </VStack>
      <Flex
        m="1.5rem"
        justify="center"
        align="center"
        flexDir={["column", "row"]}
      >
        <Text fontSize=".8rem" color="grey" mr={["0", ".5rem"]}>
          Don’t have an account?
        </Text>
        <Text fontSize=".8rem" color="brand.500">
          Create account
        </Text>
      </Flex>
    </Container>
  );
}

export default Login;
