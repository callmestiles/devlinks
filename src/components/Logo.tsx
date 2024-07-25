import React from "react";

import { Image, Show } from "@chakra-ui/react";

function Logo() {
  return (
    <>
      <Image src="/images/icon-logo.svg" alt="Logo" />
      <Show above="sm">
        <Image
          ml=".5rem"
          src="/images/icon-logo-text.svg"
          alt="devlinks"
          width="6rem"
        />
      </Show>
    </>
  );
}

export default Logo;
