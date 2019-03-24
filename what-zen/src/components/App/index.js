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
        <div className="columns">
          <div className="column">
            <div className="column">
              <CardList db={firebase} state='To do'/>
            </div>
            <div className="column">
              <NewCardForm db={firebase} state='To do'/>
            </div>
          </div>
          <div className="column">
            <div className="column">
              <CardList db={firebase} state='Doing'/>
            </div>
          </div>
          <div className="column">
            <div className="column">
              <CardList db={firebase} state='Done'/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
