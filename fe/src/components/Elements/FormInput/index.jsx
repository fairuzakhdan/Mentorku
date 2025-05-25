import { Field, Input } from '@chakra-ui/react';

const FormInput = ({ label, placeholder, required = false }) => {
  return (
    <Field.Root required={required}>
      <Field.Label>{label}</Field.Label>
      <Input placeholder={placeholder} />
      <Field.ErrorText>This is an error text</Field.ErrorText>
    </Field.Root>
  );
};

export const TextAreaForm = ({ label, placeholder }) => {
  return (
    <Field.Root>
      <Field.Label>{label}</Field.Label>
      <Textarea placeholder={placeholder} />
    </Field.Root>
  );
};

export default FormInput;
