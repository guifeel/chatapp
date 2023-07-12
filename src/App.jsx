import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Header from './components/header';
import { SearchPanel } from './components/SearchPanel';

function App() {
  return (
    <>
      <Header />
      <SearchPanel />
    </>
  );
}

export default App;
