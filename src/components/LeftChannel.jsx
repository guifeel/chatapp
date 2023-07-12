import Header from './header';
import { SearchPanel } from './SearchPanel';
import { ChatList } from './ChatList';

const LeftChannel = () => {
  return (
    <>
      <Header />
      <SearchPanel />
      <ChatList />
    </>
  );
};

export default LeftChannel;
