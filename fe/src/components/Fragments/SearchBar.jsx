import { Button, Group, Input } from '@chakra-ui/react';

const ButtonInput = () => {
  return (
    <Group w="full" maxW="xl" border={'1px solid #ccc'} padding="2" rounded={'md'}>
      <Input
        flex="2"
        placeholder="Search by, skills or role Search by, skills or role"
        size={'md'}
        border={'none'}
        color="teal"
        _placeholder={{ color: 'inherit' }}
      />
      <Button colorPalette="teal" variant="solid" size={'md'} margin={-1}>
        Find Mentors
      </Button>
    </Group>
  );
};

export default ButtonInput;
