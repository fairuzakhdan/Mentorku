import React from "react";
import {
  Box,
  Link,
  Image,
  Button,
  Container,
  Menu,
  Portal,
  Span,
} from "@chakra-ui/react";
import { LuChevronDown } from "react-icons/lu";

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
    <Container display={"flex"} alignItems={"center"}>
      <Box>
        <Image
          src="src\assets\images\4k-logo-removebg-preview.png"
          width={170}
        />
      </Box>

      <Box>
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
      </Box>
      <Box>
        <Button size="sm" variant="solid" outline="none" color="black" fontSize="md">
          Mentor On Demand
        </Button>
      </Box>
    </Container>
  );
};
export default Navigation;
