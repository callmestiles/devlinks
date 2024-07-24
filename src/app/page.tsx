import React from "react";
import {
  Box,
  Container,
  Image,
  Tabs,
  TabList,
  Text,
  Flex,
  Tab,
  Spacer,
  TabPanel,
  TabPanels,
  Button,
  FormControl,
  FormLabel,
  VStack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Heading,
  Show,
  Hide
} from "@chakra-ui/react";

import { menuList } from "../../menu-item";
import InputGroupComponent from "@/components/InputGroup";
import InputComponent from "@/components/InputComponent";
import ButtonComponent from "@/components/ButtonComponent";
import IconLink from "@/icons/icon-link";
import IconAvatar from "@/icons/icon-avatar";

function Home() {
  return (
    <Container maxW="97%" py={["1rem", "2.5rem"]}>
      <Tabs variant="soft-rounded" colorScheme="brand">
        <Flex align="center">
          <Image src="/images/icon-logo.svg" alt="Logo" />
          <Show above="sm">
            <Image
              ml=".5rem"
              src="/images/icon-logo-text.svg"
              alt="devlinks"
              width="6rem"
            />
          </Show>
          <Spacer />

          <TabList>
            <Tab
              px="1.3rem"
              py=".5rem"
              color="grey"
              _selected={{ bg: "brand.50", color: "brand.500" }}
            >
              <IconLink fill="currentColor" />
              <Show above="sm">
                <Text ml=".5rem" color="currentColor" fontSize=".9rem">
                  Links
                </Text>
              </Show>
            </Tab>
            <Tab
              px="1.3rem"
              py=".5rem"
              color="grey"
              _selected={{ bg: "brand.50", color: "brand.500" }}
            >
              <IconAvatar fill="currentColor" />
              <Show above="sm">
                <Text ml=".5rem" color="currentcolor" fontSize=".9rem">
                  Profile Details
                </Text>
              </Show>
            </Tab>
          </TabList>

          <Spacer />
          <Box
            py={[".5rem", ".3rem"]}
            px={[".5rem", ".8rem"]}
            border="1px solid #633CFF"
            borderRadius=".4rem"
          >
            <Hide above="sm">
              <Image src="/images/icon-eye.svg" alt="Eye Icon" />
            </Hide>
            <Show above="sm">
              <Text fontSize=".9rem" color="brand.500" fontWeight="600">
                Preview
              </Text>
            </Show>
          </Box>
        </Flex>

        <Flex mt="2rem">
          <Flex
            flexGrow="1"
            display={["none", "none", "flex"]}
            justify="center"
          >
            <Image src="/images/icon-phone.svg" alt="icon-phone" />
          </Flex>
          <TabPanels flexBasis={["100%", "100%", "60%"]}>
            <TabPanel>
              <Flex direction="column">
                <Box>
                  <Text
                    fontSize={["1.1rem", "1.4rem"]}
                    fontWeight="bold"
                    mb=".3rem"
                  >
                    Customize your links
                  </Text>
                  <Text fontSize={[".8rem", "1rem"]} color="grey" mb="1.5rem">
                    Add/edit/remove links below and then share all your profiles
                    with the world!
                  </Text>
                  <Button
                    width="100%"
                    size={["sm", "md"]}
                    bg="white"
                    color="brand.500"
                    border="1px"
                    borderColor="brand.500"
                    fontWeight="600"
                  >
                    + Add new link
                  </Button>
                </Box>

                <Box mt="1.5rem" bg="#FAFAFA" p=".8rem">
                  <Box>
                    <Flex align="center">
                      <Box mr=".5rem">
                        <Image
                          src="/images/icon-rectangle.svg"
                          alt="rectangle"
                        />
                        {/* <Image src="/images/icon-rectangle.svg" alt="rectangle" /> */}
                      </Box>
                      <Text color="grey" fontWeight="700">
                        Link #1
                      </Text>
                      <Spacer />
                      <Text color="grey" fontSize=".9rem">
                        Remove
                      </Text>
                    </Flex>
                    <VStack spacing="1rem">
                      <FormControl mt=".7rem">
                        <FormLabel fontSize=".8rem">Platform</FormLabel>
                        <Menu>
                          <MenuButton
                            as={Button}
                            width="100%"
                            bg="white"
                            fontWeight="400"
                            fontSize=".8rem"
                          >
                            <Flex>
                              Select Platform
                              <Spacer />
                              <Image
                                src="/images/icon-arrow-down.svg"
                                alt="arrow-down"
                              />
                            </Flex>
                          </MenuButton>
                          <Box width="100%">
                            <MenuList width="100%">
                              {menuList.map((menu, index) => (
                                <MenuItem as="div" key={index} width="100%">
                                  <Image
                                    src={menu.src}
                                    alt={menu.alt}
                                    mr="12px"
                                  />
                                  <span>{menu.text}</span>
                                </MenuItem>
                              ))}
                            </MenuList>
                          </Box>
                        </Menu>
                      </FormControl>

                      <FormControl>
                        <FormLabel fontSize=".8rem">Link</FormLabel>
                        <InputGroupComponent
                          src="/images/icon-link-2.svg"
                          placeholder="e.g https://www.google.com"
                        />
                      </FormControl>
                    </VStack>
                  </Box>
                </Box>
                <Box>
                  <ButtonComponent content="Save" />
                </Box>
              </Flex>
            </TabPanel>

            <TabPanel>
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
                    bg="brand.50"
                    display="flex"
                    px="1.5rem"
                    py="2.5rem"
                    my="1rem"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                    borderRadius=".6rem"
                  >
                    <Image
                      src="/images/icon-image-upload.svg"
                      alt="icon-image-upload"
                    />
                    <Text fontSize=".8rem" color="brand.500" fontWeight="600">
                      + Upload Image
                    </Text>
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
                    <FormLabel
                      fontSize={[".7rem", ".9rem"]}
                      flexGrow={["0", "1"]}
                    >
                      First name
                    </FormLabel>
                    <InputComponent placeholder="Ben" />
                  </FormControl>
                  <FormControl
                    display="flex"
                    flexDir={["column", "row"]}
                    alignItems={["start", "center"]}
                    isRequired
                  >
                    <FormLabel
                      fontSize={[".7rem", ".9rem"]}
                      flexGrow={["0", "1"]}
                    >
                      Last name
                    </FormLabel>
                    <InputComponent placeholder="Wright" />
                  </FormControl>
                  <FormControl
                    display="flex"
                    flexDir={["column", "row"]}
                    alignItems={["start", "center"]}
                  >
                    <FormLabel
                      fontSize={[".7rem", ".9rem"]}
                      flexGrow={["0", "1"]}
                    >
                      Email
                    </FormLabel>
                    <InputComponent placeholder="ben@example.com" />
                  </FormControl>
                </VStack>
                <ButtonComponent content="Save" />
              </Flex>
            </TabPanel>
          </TabPanels>
        </Flex>
      </Tabs>
    </Container>
  );
}

export default Home;
