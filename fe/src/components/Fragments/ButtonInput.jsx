import { Button, Group, Input } from '@chakra-ui/react';

const ButtonInput = () => {
  return (
    <Group w="full" maxW="sm" border={'1px solid #ccc'} padding="2" rounded={'md'}>
      <Input flex="2" placeholder="Search by, skills or role" size={'lg'} border={'none'} />
      <Button colorPalette="teal" variant="solid" size={'lg'} margin={-1}>
        Find Mentors
      </Button>
    </Group>
  );
};

export default ButtonInput;
