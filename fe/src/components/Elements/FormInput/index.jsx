import { Field, Input, NativeSelect, Textarea, Stack } from '@chakra-ui/react';
import { PasswordInput, PasswordStrengthMeter } from '@/components/ui/password-input';

const FormInput = ({
  label,
  placeholder,
  required = false,
  type = 'text',
  name,
  onChange = () => {},
  value,
}) => {
  return (
    <Field.Root required={required}>
      <Field.Label>
        {label} <Field.RequiredIndicator />
      </Field.Label>
      <Input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </Field.Root>
  );
};

export const FormPasswordInput = ({ value }) => {
  return (
    <Stack maxW="300px">
      <PasswordInput />
      <PasswordStrengthMeter value={value} />
    </Stack>
  );
};

export const FormTextArea = ({ label, placeholder }) => {
  return (
    <Field.Root>
      <Field.Label>{label}</Field.Label>
      <Textarea placeholder={placeholder} />
    </Field.Root>
  );
};

export const FormSelect = ({ label, values, onChange = () => {}, value }) => {
  return (
    <Field.Root>
      <Field.Label>{label}</Field.Label>
      <NativeSelect.Root>
        <NativeSelect.Field onChange={onChange} value={value}>
          {values.map((v, index) => (
            <option key={index} value={v.value} style={{ backgroundColor: 'white' }}>
              {v.value}
            </option>
          ))}
        </NativeSelect.Field>
        <NativeSelect.Indicator />
      </NativeSelect.Root>
    </Field.Root>
  );
};

export default FormInput;
