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
import { ref as dbRef, set, get, child, remove } from "firebase/database";
import { db } from "../../utils/firebase";
import EmptyList from "./EmptyList";

interface FormRef {
  submit: () => void;
}

function PanelOne() {
  const [formRefs, setFormRefs] = useState<RefObject<FormRef>[]>([]);
  const [formCount, setFormCount] = useState<number>(0);

  useEffect(() => {
    const fetchData = async () => {
      const dbRefs = dbRef(db); // Use the aliased `dbRef`
      const snapshot = await get(child(dbRefs, `formCount`));
      if (snapshot.exists()) {
        const count = snapshot.val() as number;
        setFormCount(count);
        const initialFormRefs: RefObject<FormRef>[] = Array.from(
          { length: count },
          () => React.createRef<FormRef>()
        );
        setFormRefs(initialFormRefs);
      }
    };

    fetchData();
  }, []);

  console.log(`formCount: ${formCount}`);
  const addForm = () => {
    const newFormCount = formCount + 1;
    setFormCount(newFormCount);
    setFormRefs((prevFormRefs) => [
      ...prevFormRefs,
      React.createRef<FormRef>()
    ]);

    set(dbRef(db, `formCount`), newFormCount)
      .then(() => {
        console.log("Form count updated successfully!");
      })
      .catch((error) => {
        console.error("Error updating form count: ", error);
      });
  };

  const removeForm = (index: number) => {
    setFormRefs((prevFormRefs) => {
      const newFormRefs = [...prevFormRefs];
      newFormRefs.splice(index, 1);
      return newFormRefs;
    });

    setFormCount((prevCount) => {
      const newCount = prevCount - 1;
      set(dbRef(db, `formCount`), newCount)
        .then(() => {
          console.log("Form count updated successfully!");
        })
        .catch((error) => {
          console.error("Error updating form count: ", error);
        });
      return newCount;
    });

    remove(dbRef(db, `links/${index}`))
      .then(() => {
        console.log("Form data removed successfully!");
      })
      .catch((error) => {
        console.error("Error removing form data: ", error);
      });
  };

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
      {formCount === 0 ? (
        <EmptyList />
      ) : (
        <>
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
              bg="brand.500"
              color="white"
              size={["sm", "md"]}
              type="submit"
              mt="3rem"
              _hover={{
                bg: "brand.50",
                color: "brand.500",
                border: "1",
                borderColor: "brand.500"
              }}
            >
              Save
            </Button>
          </Flex>
        </>
      )}
    </Flex>
  );
}

export default PanelOne;
