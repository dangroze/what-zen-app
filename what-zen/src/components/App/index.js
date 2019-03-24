import React, { Component } from 'react';
import './App.css';
import CardList from '../CardList';
import NewCardForm from '../NewCardForm';
import firebase from 'firebase';

class App extends Component {
  constructor(props) {
    super(props);
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyAXfFtVxxVYWlcgXctJmLU2Rn1dA5lL8uI",
      authDomain: "what-zen.firebaseapp.com",
      databaseURL: "https://what-zen.firebaseio.com",
      projectId: "what-zen",
      storageBucket: "what-zen.appspot.com",
      messagingSenderId: "696182130594"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <div className="App">
      Welcome to your board
        <div className="columns">
          <div className="column is-3"></div>
          <div className="column is-6">
              <CardList db={firebase}/></div>
        </div>
        <div className="columns">
          <div className="column is-3"></div>
          <div className="column is-6">
            <NewCardForm db={firebase}/></div>
        </div>
      </div>
    );
  }
}

export default App;
