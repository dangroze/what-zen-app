import React, { Component } from 'react';
import './App.css';
import NewCardForm from '../NewCardForm/index';
import firebase from 'firebase';

class App extends Component {
  constructor(props) {
    super(props);
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyCiisiaYLNmLBNTW941SSVAYmqS3YY9CNU",
      authDomain: "what-zen-app.firebaseapp.com",
      databaseURL: "https://what-zen-app.firebaseio.com",
      projectId: "what-zen-app",
      storageBucket: "what-zen-app.appspot.com",
      messagingSenderId: "914887048016"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <div className="App">
        Hello world
        <NewCardForm db={firebase}/>
      </div>
    );
  }
}

export default App;
