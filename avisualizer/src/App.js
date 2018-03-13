import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AScene from "./Components/AScene.js"



class App extends Component {
  state={
    objects: []
  }
  render() {
    return (
      <div className="App">
        <AScene />
       
      </div>
    );
  }
}

export default App;
