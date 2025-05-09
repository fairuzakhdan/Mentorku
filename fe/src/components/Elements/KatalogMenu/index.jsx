import React from 'react';
import PropTypes from 'prop-types';
import { Menu, Button, Portal, Link } from '@chakra-ui/react';
import { LuChevronDown } from 'react-icons/lu';
const CatalogMenu = ({ links }) => {
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button size="sm" variant="solid" outline="none" color="black" fontSize="md">
          Katalog <LuChevronDown />
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content bg="white" padding="2" shadow="md">
            {links.map((link) => (
              <Menu.Item key={link.href} asChild value={link.title} color="black">
                <Link
                  href={link.href}
                  rel="noreferrer"
                  cursor="pointer"
                  variant="underline"
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
  );
};

CatalogMenu.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      href: PropTypes.string,
    }),
  ),
};

export default CatalogMenu;
