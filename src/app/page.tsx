import React from "react";
import "./globals.css";
import {
  Container,
  Image,
  Tabs,
  TabList,
  Flex,
  Spacer,
  TabPanel,
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

        <Flex mt="2rem">
          <Flex
            flexGrow="1"
            display={["none", "none", "flex"]}
            justify="center"
            py="5rem"
          >
            <Image
              src="/images/icon-phone.svg"
              alt="icon-phone"
              width="13rem"
            />
          </Flex>
          <TabPanels flexBasis={["100%", "100%", "60%"]}>
            <TabPanel>
              <PanelOne />
            </TabPanel>

            <TabPanel>
              <PanelTwo />
            </TabPanel>
          </TabPanels>
        </Flex>
      </Tabs>
    </Container>
  );
}

export default Home;
