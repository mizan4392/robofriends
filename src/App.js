import React from 'react';
import './App.css';
import { robots } from './robots';
import CardList from './components/CardList/CardList';
function App() {
  return (
    <div className='App'>
      <CardList robots={robots}/>
    </div>
  );
}

export default App;
