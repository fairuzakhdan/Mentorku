import { Button, Field, Fieldset, Input, Stack, Flex, Text } from '@chakra-ui/react';

const FieldGroup = ({ price, totalPrice, onClick = () => {} }) => {
  return (
    <Fieldset.Root size="lg" maxW="md" border="1px solid #b0acac" p={5} rounded={'lg'}>
      <Stack>
        <Fieldset.Legend color="textBlue" fontWeight="medium" fontSize="lg">
          <Flex justifyContent="space-between" borderBottom={'1px solid #ccc'} pb={2}>
            <Text>Price of Mentoring</Text>
            <Text fontWeight="bold" color="gray.400">
              {price.toLocaleString('id-ID', {
                style: 'currency',
                currency: 'IDR',
                minimumFractionDigits: 0,
              })}
            </Text>
          </Flex>
        </Fieldset.Legend>
      </Stack>

      <Fieldset.Content>
        <Field.Root>
          <Field.Label>Kode Promo</Field.Label>
          <Input name="kode" borderColor="gray.400" placeholder="Gunakan" textAlign="right" />
        </Field.Root>
        <Flex justifyContent="space-between" color="gray.500">
          <Fieldset.HelperText>Potongan</Fieldset.HelperText>
          <Text>{'-Rp.0'}</Text>
        </Flex>
        <Flex justifyContent="space-between" color="gray.500">
          <Fieldset.HelperText>Fee</Fieldset.HelperText>
          <Text>{'-Rp.0'}</Text>
        </Flex>
        <Flex justifyContent="space-between" fontSize="xl">
          <Text>Total Payment</Text>
          <Text fontWeight="bold" color="red">
            {totalPrice.toLocaleString('id-ID', {
              style: 'currency',
              currency: 'IDR',
              minimumFractionDigits: 0,
            })}
          </Text>
        </Flex>
      </Fieldset.Content>

      <Button type="submit" alignSelf="flex-start" colorPalette="red" w="full" onClick={onClick}>
        Pay Now
      </Button>
    </Fieldset.Root>
  );
};
export default FieldGroup;
