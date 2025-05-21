import React from 'react';
import { Breadcrumb, Flex } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

const BreadcrumbLink = ({ mentorName, links, color = 'white', size = 'sm' }) => {
  return (
    <Breadcrumb.Root>
      <Breadcrumb.List color={color}>
        {links.map((link, index) => (
          <Flex alignItems={'center'} columnGap={2} key={index}>
            <Breadcrumb.Item>
              <Link to={link.href}>
                <Flex
                  columnGap={2}
                  alignItems={'center'}
                  _hover={{ color: '#ccc' }}
                  color={color}
                  fontSize={size}
                >
                  <link.icon />
                  {link.title}
                </Flex>
              </Link>
            </Breadcrumb.Item>
            <Breadcrumb.Separator color={color} />
          </Flex>
        ))}

        <Breadcrumb.Item>
          <Breadcrumb.CurrentLink>{mentorName}</Breadcrumb.CurrentLink>
        </Breadcrumb.Item>
      </Breadcrumb.List>
    </Breadcrumb.Root>
  );
};
BreadcrumbLink.propTypes = {
  mentorName: PropTypes.string,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      href: PropTypes.string,
    }),
  ),
  color: PropTypes.string,
};
export default BreadcrumbLink;
