import React from "react";
import { Box, Hide, Image, Text, Show, Link } from "@chakra-ui/react";

function Preview() {
  return (
    <>
      <Box
        py={[".5rem", ".3rem"]}
        px={[".5rem", ".8rem"]}
        border="1px solid #633CFF"
        borderRadius=".4rem"
      >
        <Hide above="sm">
          <Image src="/images/icon-eye.svg" alt="Eye Icon" />
        </Hide>
        <Link href="/preview" textDecoration="none">
          <Show above="sm">
            <Text fontSize=".9rem" color="brand.500" fontWeight="600">
              Preview
            </Text>
          </Show>
        </Link>
      </Box>
    </>
  );
}

export default Preview;
