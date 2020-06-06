import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './components/Routes/Routes';
function App() {
  return (
    <Router>
      <div className="App container">
      <h1>Navigation here</h1>
      <h1>Oppa</h1>
        <Routes />
      </div>
    </Router>
  );
}

export default App;
