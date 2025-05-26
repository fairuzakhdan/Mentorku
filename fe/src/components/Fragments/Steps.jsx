import { Button, ButtonGroup, Steps, Text, Box, Flex } from '@chakra-ui/react';

const StepsProcess = ({ steps, onClick }) => {
  return (
    <Steps.Root defaultStep={1} count={steps.length} colorPalette={'teal'}>
      <Steps.List>
        {steps.map((step, index) => (
          <Steps.Item key={index} index={index} title={step.title}>
            <Steps.Indicator />
            <Steps.Title color={'textGreen'}>{step.title}</Steps.Title>
            <Steps.Separator />
          </Steps.Item>
        ))}
      </Steps.List>

      {steps.map((step, index) => (
        <Steps.Content key={index} index={index}>
          <>
            <Text>{step.description}</Text>
            {step.content}
          </>
        </Steps.Content>
      ))}
      <Steps.CompletedContent>
        <Flex
          mt={5}
          alignItems={'center'}
          justifyContent={'center'}
          flexDirection={'column'}
          gap={5}
        >
          <Text border={'1px solid teal'} padding="2" rounded={'md'} w="full" textAlign={'center'}>
            All steps are complete!
          </Text>
          <Button variant="solid" colorPalette="red" w="full" fontSize="md" onClick={onClick}>
            Apply Now
          </Button>
        </Flex>
      </Steps.CompletedContent>

      <ButtonGroup size="sm" variant="outline">
        <Steps.PrevTrigger asChild>
          <Button>Prev</Button>
        </Steps.PrevTrigger>
        <Steps.NextTrigger asChild>
          <Button>Next</Button>
        </Steps.NextTrigger>
      </ButtonGroup>
    </Steps.Root>
  );
};

export default StepsProcess;
