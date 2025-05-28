import {
  Field,
  Input,
  NativeSelect,
  Textarea,
  Stack,
  CheckboxCard,
  Checkbox,
} from '@chakra-ui/react';
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

export const FormTextArea = ({
  label,
  placeholder,
  required = false,
  value,
  onChange = () => {},
}) => {
  return (
    <Field.Root required={required}>
      <Field.Label>
        {label} <Field.RequiredIndicator />
      </Field.Label>
      <Textarea placeholder={placeholder} value={value} onChange={onChange} />
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
            <option key={index} value={v.value || v.title} style={{ backgroundColor: 'white' }}>
              {v.value || v.title}
            </option>
          ))}
        </NativeSelect.Field>
        <NativeSelect.Indicator />
      </NativeSelect.Root>
    </Field.Root>
  );
};
export const Check = ({ label, size = 'sm', checked }) => {
  console.log(checked);
  return (
    <Checkbox.Root size={size} color={'gray.700'}>
      <Checkbox.HiddenInput checked={checked} />
      <Checkbox.Control />
      <Checkbox.Label>{label}</Checkbox.Label>
    </Checkbox.Root>
  );
};
export const CheckBox = ({ label }) => {
  return (
    <CheckboxCard.Root maxW="240px">
      <CheckboxCard.HiddenInput />
      <CheckboxCard.Control>
        <CheckboxCard.Label>{label}</CheckboxCard.Label>
        <CheckboxCard.Indicator />
      </CheckboxCard.Control>
    </CheckboxCard.Root>
  );
};

export default FormInput;
