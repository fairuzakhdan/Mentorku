import React from "react";
import {
  Box,
  Link,
  Image,
  Button,
  Container,
  Menu,
  Portal,
  HStack,
  Badge, Stack
} from "@chakra-ui/react";
import { BiLogIn } from "react-icons/bi";
import { LuChevronDown } from "react-icons/lu";
import { FaChalkboardTeacher } from "react-icons/fa";
import { Link as RouterLink } from "react-router";

const Navigation = () => {
  const links = [
    {
      title: "Naruto",
      href: "#",
    },
    {
      title: "One Piece",
      href: "#",
    },
    {
      title: "Attack on Titan",
      href: "#",
    },
  ];
  return (
    <Container
      borderBottom={"1px solid rgb(204, 201, 201)"}
      position={"sticky"}
      top={0}
    >
      <Box
        display="flex"
        justifyContent={"space-between"}
        alignItems={"center"}
        marginInline={7}
      >
        <Box display="flex" alignItems={"center"}>
         <RouterLink to={"/"} outline={"none"}> <Image
            src="src\assets\images\4k-logo-removebg-preview.png"
            width={170}
          /></RouterLink>
          <Menu.Root>
            <Menu.Trigger asChild>
              <Button
                size="sm"
                variant="solid"
                outline="none"
                color="black"
                fontSize="md"
              >
                Katalog <LuChevronDown />
              </Button>
            </Menu.Trigger>
            <Portal>
              <Menu.Positioner>
                <Menu.Content bg="white" padding="2" shadow="md">
                  {links.map((link) => (
                    <Menu.Item key={link.href} asChild value={link.title}>
                      <Link
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        cursor="pointer"
                        variant="underline"
                        color="black"
                        fontSize="sm"
                        padding="1"
                      >
                        {link.title}
                      </Link>
                    </Menu.Item>
                  ))}
                </Menu.Content>
              </Menu.Positioner>
            </Portal>
          </Menu.Root>

          <Button
            size="sm"
            variant="solid"
            outline="none"
            color="black"
            fontSize="md"
          >
            Mentor On Demand
          </Button>
          <Button
            size="sm"
            variant="solid"
            outline="none"
            color="black"
            fontSize="md"
          >
            Service
          </Button>
          <Button
            size="sm"
            variant="solid"
            outline="none"
            color="black"
            fontSize="md"
          >
            Blog
          </Button>
          <Button
            size="sm"
            variant="solid"
            outline="none"
            color="black"
            fontSize="md"
          >
            Join Us
          </Button>
      
        </Box>
        <HStack>
        <Button colorPalette="teal" variant="solid">
          <FaChalkboardTeacher /> Activity
          </Button>
          <Button  variant="solid"  color={"teal"} outline="1px solid teal" _hover={{bg:"gray.500", color:"white"}}>
            <BiLogIn /> Login
          </Button>
        </HStack>
      </Box>
    </Container>
  );
};
export default Navigation;
