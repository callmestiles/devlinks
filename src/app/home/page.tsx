import React from "react";
import "../globals.css";
import {
  Container,
  Image,
  Tabs,
  TabList,
  Flex,
  Spacer,
  TabPanel,
  Box,
  TabPanels
} from "@chakra-ui/react";

import TabComponent from "@/components/TabComponent";
import Logo from "@/components/Logo";
import Preview from "@/components/Preview";
import PanelOne from "@/components/PanelOne";
import PanelTwo from "@/components/PanelTwo";

function Home() {
  return (
    <Container maxW="97%" py={["1rem", "2.5rem"]} pb={["0", "0", "0"]}>
      <Tabs variant="soft-rounded" colorScheme="brand">
        <Flex align="center">
          <Logo />
          <Spacer />
          <TabList>
            <TabComponent />
          </TabList>
          <Spacer />
          <Preview />
        </Flex>

        <Flex mt="2rem" width="100%" minH="80vh" bg="white">
          <Box display={["none", "none", "flex"]} width="50%">
            <Flex
              justify="center"
              position="fixed"
              width="30%"
              height="80vh"
              bg="white"
            >
              <Image
                src="/images/icon-phone.svg"
                alt="icon-phone"
                width="13rem"
              />
            </Flex>
          </Box>
          {/* <Flex
            flexGrow="1"
            display={["none", "none", "flex"]}
            justify="center"
            py="5rem"
            position="fixed"
            top="0"
          >
            <Image
              src="/images/icon-phone.svg"
              alt="icon-phone"
              width="13rem"
            />
          </Flex> */}
          <TabPanels
            display="flex"
            flexGrow="1"
            alignSelf={["start", "start", "flex-end"]}
            // bg="white"
          >
            <TabPanel width="100%">
              <PanelOne />
            </TabPanel>

            <TabPanel width="100%">
              <PanelTwo />
            </TabPanel>
          </TabPanels>
        </Flex>
      </Tabs>
    </Container>
  );
}

export default Home;
