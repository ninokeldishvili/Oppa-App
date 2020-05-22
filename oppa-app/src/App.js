import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './components/Routes/Routes';
function App() {
  return (
    <Router>
      <div className="App container">
        <Routes />
      </div>
    </Router>
  );
}

export default App;
