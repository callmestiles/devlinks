import React, {
  useState,
  forwardRef,
  useImperativeHandle,
  useEffect
} from "react";
import {
  VStack,
  FormControl,
  Box,
  Menu,
  Input,
  FormLabel,
  MenuButton,
  Flex,
  Image,
  Spacer,
  MenuList,
  MenuItem,
  Button
} from "@chakra-ui/react";
import { menuList } from "../../menu-item";

interface Menu {
  src: string;
  alt: string;
  text: string;
}

interface FormRef {
  submit: () => void;
}

interface LinkData {
  selectedMenu: Menu | null;
  inputValue: string;
}

interface CreateFormProps {
  id: number;
}

const CreateForm = forwardRef<FormRef, CreateFormProps>((props, ref) => {
  const { id } = props;
  const [selectedMenu, setSelectedMenu] = useState<Menu | null>(null);
  const [inputValue, setInputValue] = useState("");

  const handleMenuSelect = (menu: Menu) => {
    setSelectedMenu(menu);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const links: LinkData[] = JSON.parse(
        localStorage.getItem("links") || "[]"
      );
      if (links.length > 0) {
        const lastLink = links[links.length - 1];
        setSelectedMenu(lastLink.selectedMenu);
        setInputValue(lastLink.inputValue);
      }
    }
  }, []);

  const submit = () => {
    if (typeof window !== "undefined") {
      const links: LinkData[] = JSON.parse(
        localStorage.getItem("links") || "[]"
      );
      const newItem: LinkData = { selectedMenu, inputValue };
      const isDuplicate = links.some(
        (item: LinkData) =>
          JSON.stringify(item.selectedMenu) ===
            JSON.stringify(newItem.selectedMenu) &&
          item.inputValue === newItem.inputValue
      );
      if (!isDuplicate) {
        links.push(newItem);
        localStorage.setItem("links", JSON.stringify(links));
      }
    }
  };

  useImperativeHandle(ref, () => ({
    submit
  }));

  return (
    <VStack spacing="1rem">
      <FormControl mt=".7rem">
        <FormLabel fontSize=".8rem">Platform</FormLabel>
        <Box width="100%">
          <Menu>
            <MenuButton
              as={Button}
              width="100%"
              bg="white"
              fontWeight="400"
              fontSize=".8rem"
              _hover={{ bg: "brand.50" }}
              border="1px"
              borderColor="brand.500"
              _active={{ bg: "white", borderColor: "brand.500" }}
            >
              <Flex>
                {selectedMenu && (
                  <Image
                    src={selectedMenu.src}
                    alt={selectedMenu.alt}
                    mr="12px"
                  />
                )}
                {selectedMenu ? selectedMenu.text : "Select Platform"}
                <Spacer />
                <Image src="/images/icon-arrow-down.svg" alt="arrow-down" />
              </Flex>
            </MenuButton>
            <Box minWidth="100% !important">
              <MenuList minWidth="100% !important">
                {menuList.map((menu, index) => (
                  <MenuItem
                    as="div"
                    key={index}
                    minWidth="100% !important"
                    onClick={() => handleMenuSelect(menu)}
                    _hover={{ bg: "brand.50" }}
                    cursor="pointer"
                  >
                    <Image src={menu.src} alt={menu.alt} mr="12px" />
                    <span>{menu.text}</span>
                  </MenuItem>
                ))}
              </MenuList>
            </Box>
          </Menu>
        </Box>
      </FormControl>

      <FormControl>
        <FormLabel fontSize=".8rem">Link</FormLabel>
        <Input
          flexBasis={["100%", "50%"]}
          bg="white"
          name="link"
          _placeholder={{ fontSize: [".7rem", ".9rem"] }}
          focusBorderColor="brand.200"
          placeholder="e.g https://www.google.com"
          value={inputValue}
          onChange={handleInputChange}
          type="text"
        />
      </FormControl>
    </VStack>
  );
});

CreateForm.displayName = "CreateForm";

export default CreateForm;
