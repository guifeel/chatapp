import { Flex } from '@chakra-ui/react';
import './App.css';
import LeftPanel from './components/LeftPanel';
import { RightPanel } from './components/RightPanel';

function App() {
  return (
    <Flex h='100vh'>
      <LeftPanel />
      <RightPanel />
    </Flex>
  );
}

export default App;
