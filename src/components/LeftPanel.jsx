import Header from './header';
import { SearchPanel } from './SearchPanel';
import { ChatList } from './ChatList';
import { Box, Flex } from '@chakra-ui/react';

const LeftPanel = () => {
  return (
    <Flex flexDirection='column' w='30%'>
      <Box>
        <Header />
        <SearchPanel />
      </Box>
      <ChatList flex='1' overflow='auto' />
    </Flex>
  );
};

export default LeftPanel;
