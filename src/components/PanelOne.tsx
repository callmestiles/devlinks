"use client";
import React, { useState, useEffect, RefObject } from "react";
import {
  Flex,
  Text,
  Box,
  Button,
  Image,
  VStack,
  Spacer
} from "@chakra-ui/react";
import CreateForm from "./CreateForm";

interface FormRef {
  submit: () => void;
}

function PanelOne() {
  //   const [formRefs, setFormRefs] = useState<React.RefObject<FormRef>[]>([
  //     React.createRef()
  //   ]);

  //   const addForm = () => {
  //     setFormRefs([...formRefs, React.createRef()]);
  //   };

  //   const removeForm = (index: number) => {
  //     const newFormRefs = [...formRefs];
  //     newFormRefs.splice(index, 1);
  //     setFormRefs(newFormRefs);
  //     const links = JSON.parse(localStorage.getItem("links") || "[]");
  //     links.splice(index, 1);
  //     localStorage.setItem("links", JSON.stringify(links));
  //   };

  const initialFormCount = Number(localStorage.getItem("formCount") || 1);
  const initialFormRefs: RefObject<FormRef>[] = Array.from(
    { length: initialFormCount },
    () => React.createRef<FormRef>()
  );

  const [formRefs, setFormRefs] =
    useState<RefObject<FormRef>[]>(initialFormRefs);

  useEffect(() => {
    localStorage.setItem("formCount", formRefs.length.toString());
  }, [formRefs.length]);

  const addForm = () => {
    setFormRefs((prevFormRefs) => [
      ...prevFormRefs,
      React.createRef<FormRef>()
    ]);
  };

  const removeForm = (index: number) => {
    setFormRefs((prevFormRefs) => {
      const newFormRefs = [...prevFormRefs];
      newFormRefs.splice(index, 1);
      return newFormRefs;
    });
    localStorage.removeItem(`link${index}`);
  };

  //   const removeForm = (index: number) => {
  //     setFormRefs((prevFormRefs) => {
  //       const newFormRefs = [...prevFormRefs];
  //       newFormRefs.splice(index, 1);
  //       return newFormRefs;
  //     });
  //     const links = JSON.parse(localStorage.getItem("links") || "[]");
  //     links.splice(index, 1);
  //     localStorage.setItem("links", JSON.stringify(links));
  //   };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    formRefs.forEach((formRef) => formRef.current?.submit());
  };

  return (
    <Flex direction="column" as="form" onSubmit={handleSubmit}>
      <Box>
        <Text fontSize={["1.1rem", "1.4rem"]} fontWeight="bold" mb=".3rem">
          Customize your links
        </Text>
        <Text fontSize={[".8rem", "1rem"]} color="grey" mb="1.5rem">
          Add/edit/remove links below and then share all your profiles with the
          world!
        </Text>
        <Button
          onClick={addForm}
          width="100%"
          size={["sm", "md"]}
          bg="white"
          _hover={{ bg: "brand.50" }}
          color="brand.500"
          border="1px"
          borderColor="brand.500"
          fontWeight="600"
        >
          + Add new link
        </Button>
      </Box>

      <VStack mt="1.5rem" p=".8rem" spacing="2rem">
        {formRefs.map((formRef, index) => (
          <Box bg="#FAFAFA" width="100%" p="1.5rem" key={index}>
            <Box>
              <Flex align="center">
                <Box mr=".5rem">
                  <Image
                    src="/images/icon-rectangle.svg"
                    alt="rectangle"
                    mb=".2rem"
                  />
                  <Image src="/images/icon-rectangle.svg" alt="rectangle" />
                </Box>
                <Text color="grey" fontWeight="700">
                  Link #{index + 1}
                </Text>
                <Spacer />
                <Text
                  cursor="pointer"
                  color="grey"
                  fontSize=".9rem"
                  onClick={() => removeForm(index)}
                >
                  Remove
                </Text>
              </Flex>
              <CreateForm id={index} key={index} ref={formRef} />
            </Box>
          </Box>
        ))}
      </VStack>
      <Flex justify="flex-end">
        <Button
          width={["100%", "5rem"]}
          bg="brand.300"
          color="white"
          size={["sm", "md"]}
          type="submit"
          mt="3rem"
          _hover={{ bg: "brand.50" }}
        >
          Save
        </Button>
      </Flex>
    </Flex>
  );
}

export default PanelOne;
