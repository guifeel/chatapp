import Header from './header';
import { SearchPanel } from './SearchPanel';
import { ChatList } from './ChatList';
import { Box } from '@chakra-ui/react';

const LeftPanel = () => {
  return (
    <Box w='30%'>
      <Header />
      <SearchPanel />
      <ChatList />
    </Box>
  );
};

export default LeftPanel;
