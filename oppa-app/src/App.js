import React from 'react';
import './App.css';
import Tile from './components/Tile/Tile'
function App() {
  return (
    <div className="App container">
      <h1>Oppa</h1>
      <div className="row">
        <Tile name="მობილური"/>
        <Tile name="კომუნალური"/>
      </div>
      <div className="row">
        <Tile name="ფინანსური მომსახურება"/>
        <Tile name="ქველმოქმედება"/>
      </div>
    </div>
  );
}

export default App;
