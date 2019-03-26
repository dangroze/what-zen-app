import React, { Component } from 'react';
import { AuthUserContext } from '../Session';
import app from 'firebase/app';
import _ from 'lodash';

class GetUsername extends Component {
  constructor(props) {
    super(props)

    app.database().ref('users').on('value', snapshot => {
      this.getUsername(snapshot.val());
    });
  }

  getUsername(users) {
    console.log("sherif");
    console.log(_(users));
    console.log('sherif end of object');
    return users;
  }

}

export default GetUsername
