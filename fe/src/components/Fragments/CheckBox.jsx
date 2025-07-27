import { CheckboxCard, HStack } from '@chakra-ui/react';

const CheckBox = () => {
  return (
    <HStack>
      <CheckboxCard.Root>
        <CheckboxCard.HiddenInput />
        <CheckboxCard.Control>
          <CheckboxCard.Label>Chakra UI</CheckboxCard.Label>
        </CheckboxCard.Control>
      </CheckboxCard.Root>

      <CheckboxCard.Root>
        <CheckboxCard.HiddenInput />
        <CheckboxCard.Control>
          <CheckboxCard.Label>Next.js</CheckboxCard.Label>
        </CheckboxCard.Control>
      </CheckboxCard.Root>
    </HStack>
  );
};
export default CheckBox;
