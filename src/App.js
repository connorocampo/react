import React, { Component } from 'react';
import Projects from './Components/Projects';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        My React App.
        <Projects />
      </div>
    );
  }
}

export default App;
