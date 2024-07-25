import React from "react";
import { Tab, Show, Text } from "@chakra-ui/react";
import IconLink from "@/icons/icon-link";
import IconAvatar from "@/icons/icon-avatar";

function TabComponent() {
  return (
    <>
      <Tab
        px="1.3rem"
        py=".5rem"
        color="grey"
        _selected={{ bg: "brand.50", color: "brand.500" }}
        _hover={{ color: "brand.500" }}
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
        _hover={{ color: "brand.500" }}
      >
        <IconAvatar fill="currentColor" />
        <Show above="sm">
          <Text ml=".5rem" color="currentcolor" fontSize=".9rem">
            Profile Details
          </Text>
        </Show>
      </Tab>
    </>
  );
}

export default TabComponent;
