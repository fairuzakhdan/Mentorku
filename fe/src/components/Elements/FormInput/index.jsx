import { Field, Input } from '@chakra-ui/react';

const FormInput = ({ label, placeholder }) => {
  return (
    <Field.Root>
      <Field.Label>{label}</Field.Label>
      <Input placeholder={placeholder} />
    </Field.Root>
  );
};

export default FormInput;
