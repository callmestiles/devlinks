import React from "react";
import {
  Box,
  Container,
  Image,
  Tabs,
  TabList,
  Text,
  Flex,
  Select,
  Tab,
  Spacer,
  TabPanel,
  TabPanels,
  Button,
  FormControl,
  FormLabel,
  HStack,
  VStack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Input,
  InputGroup,
  InputLeftAddon,
  InputLeftElement,
  Heading
} from "@chakra-ui/react";

function Home() {
  return (
    <Container maxW="lg" py="1rem">
      <Tabs variant="soft-rounded" colorScheme="brand">
        <Flex align="center">
          <Image src="/images/icon-logo.svg" alt="Logo" />
          <Spacer />

          <TabList>
            <Tab px="1.3rem" py=".5rem" _selected={{ bg: "brand.50" }}>
              <Image src="/images/icon-link.svg" alt="Link icon" />
            </Tab>
            <Tab px="1.3rem" py=".5rem" _selected={{ bg: "brand.50" }}>
              <Image src="/images/icon-avatar.svg" alt="Avatar icon" />
            </Tab>
          </TabList>

          <Spacer />
          <Box p=".5rem" border="1px solid #633CFF" borderRadius=".4rem">
            <Image src="/images/icon-eye.svg" alt="Eye Icon" />
          </Box>
        </Flex>

        <TabPanels>
          <TabPanel mt="2rem">
            <Flex direction="column">
              <Box>
                <Text fontSize="1.1rem" fontWeight="bold" mb=".3rem">
                  Customize your links
                </Text>
                <Text fontSize=".8rem" color="grey" mb="1.5rem">
                  Add/edit/remove links below and then share all your profiles
                  with the world!
                </Text>
                <Button
                  width="100%"
                  size="sm"
                  bg="white"
                  color="brand.500"
                  border="1px"
                  borderColor="brand.500"
                  fontWeight="600"
                >
                  + Add new link
                </Button>
              </Box>

              <Flex
                flexDir="column"
                align="start"
                mt="1.5rem"
                bg="#FAFAFA"
                p=".8rem"
              >
                <VStack>
                  <Image
                    alignSelf="center"
                    src="/images/icon-start.svg"
                    alt="icon-empty"
                  />
                  <Heading fontSize="1.2rem">Let’s get you started</Heading>
                  <Text fontSize=".8rem" color="grey">
                    Use the “Add new link” button to get started. Once you have
                    more than one link, you can reorder and edit them. We’re
                    here to help you share your profiles with everyone!
                  </Text>
                </VStack>
              </Flex>
              <Box>
                <Button
                  width="100%"
                  bg="brand.300"
                  color="white"
                  size="sm"
                  mt="3rem"
                >
                  Save
                </Button>
              </Box>
            </Flex>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Container>
  );
}

export default Home;
