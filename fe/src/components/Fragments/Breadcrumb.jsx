import React from 'react';
import { Breadcrumb, Span, Flex } from '@chakra-ui/react';
import { LuHouse, LuShirt } from 'react-icons/lu';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { LuUserRoundSearch } from 'react-icons/lu';

const BreadcrumbLink = ({ mentorName }) => {
  return (
    <Breadcrumb.Root>
      <Breadcrumb.List color="#ffff">
        <Breadcrumb.Item>
          <Link href="/">
            <Flex columnGap={2} alignItems={'center'} _hover={{ color: '#ccc' }}>
              <LuHouse />
              Home
            </Flex>
          </Link>
        </Breadcrumb.Item>
        <Breadcrumb.Separator color="#ffff" />

        <Breadcrumb.Item>
          <Link href="/mentors">
            <Flex columnGap={2} alignItems={'center'} _hover={{ color: '#ccc' }}>
              <LuUserRoundSearch />
              Find a Mentor
            </Flex>
          </Link>
        </Breadcrumb.Item>
        <Breadcrumb.Separator color="#ffff" />

        <Breadcrumb.Item>
          <Breadcrumb.CurrentLink>{mentorName}</Breadcrumb.CurrentLink>
        </Breadcrumb.Item>
      </Breadcrumb.List>
    </Breadcrumb.Root>
  );
};
BreadcrumbLink.propTypes = {
  mentorName: PropTypes.string,
};
export default BreadcrumbLink;
