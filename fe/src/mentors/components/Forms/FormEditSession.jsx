import FormInput from '../../../components/Elements/FormInput';
import { Box, Group, Flex, Stack, Button, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { FormTextArea } from '../../../components/Elements/FormInput';
import { CiEdit } from 'react-icons/ci';
const FormEditSession = () => {
  return (
    <Stack rowGap={4}>
      <FormInput label={'Edit Day'}/>
    </Stack>
  );
};

export default FormEditSession;
