import { SegmentGroup } from '@chakra-ui/react';

const ButtonGroup = () => {
  return (
    <SegmentGroup.Root defaultValue="All" backgroundColor={'white'}>
      <SegmentGroup.Indicator backgroundColor={'textGreen'} />
      <SegmentGroup.Items
        mr={1}
        color={'black'}
        border={'1px solid #b0acac'}
        items={[
          'All',
          'UI/UX Design',
          'Software Engineer',
          'Web Developer',
          'Mobile Developer',
          'Machine Learning',
          'Data Analyst',
          'Data Science',
          'Game Developer',
        ]}
      />
    </SegmentGroup.Root>
  );
};
export default ButtonGroup;
