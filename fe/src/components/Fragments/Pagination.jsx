import { ButtonGroup, IconButton, Pagination } from '@chakra-ui/react';
import { LuChevronLeft, LuChevronRight } from 'react-icons/lu';

const PaginationPage = () => {
  return (
    <Pagination.Root count={20} pageSize={2} defaultPage={1}>
      <ButtonGroup variant="ghost" size="sm">
        <Pagination.PrevTrigger asChild>
          <IconButton color={'textGreen'}>
            <LuChevronLeft />
          </IconButton>
        </Pagination.PrevTrigger>

        <Pagination.Items
          color={'textGreen'}
          render={(page) => (
            <IconButton variant={{ base: 'ghost', _selected: 'outline' }}>{page.value}</IconButton>
          )}
        />

        <Pagination.NextTrigger asChild>
          <IconButton color={'textGreen'}>
            <LuChevronRight />
          </IconButton>
        </Pagination.NextTrigger>
      </ButtonGroup>
    </Pagination.Root>
  );
};
export default PaginationPage;
