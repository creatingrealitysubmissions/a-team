import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AScene from "./Components/AScene.js"
import UI from "./Components/UI.js"

const sceneStyle ={
  height: (window.innerHeight * 0.75) + "px"
}


class App extends Component {
  state={
    objects: []
  }
  render() {
    return (
      <div className="App">
        <div style={sceneStyle}>
          <AScene />
        </div>
        <div>
          <UI/>
        </div>
      </div>
    );
  }
}

export default App;
