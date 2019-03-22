import React, { Component } from 'react';
import './App.css';
import NewCardForm from '../NewCardForm/index'

class App extends Component {
  render() {
    return (
      <div className="App">
        Hello world
        <NewCardForm/>
      </div>
    );
  }
}

export default App;
