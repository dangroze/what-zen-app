import React, { Component } from 'react';
import app, { auth } from 'firebase/app';
import { AuthUserContext, withAuthorization } from '../Session';
import { withAuthentication } from '../Session';

class NewCardForm extends Component {
  constructor(props) {
    super(props)
    this.updateInput = this.updateInput.bind(this);
    this.addCard = this.addCard.bind(this);
    this.state = {
      title: '',
      details: '',
      status: 'todo',
      comments: '',
      user: ''
    }
  }
  
  updateInput(e){
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  }

  addCard(e){
    e.preventDefault();

    app.database().ref('/cards').push({
      title: this.state.title,
      status: 'To do',
      user: this.props.useremail

    });
    this.setState({
      title: '',
      status: 'To do',
      user: this.props.useremail

    });
  }

  render() {
    return (
      <div className="NewCardForm">
        New tasks
        <form action="#" onSubmit={this.addCard} >
          <div><input
            required
            className="input"
            name="title"
            onChange={this.updateInput}
            type="text"
            placeholder="Enter a new task here"
            value={this.state.title}
          />
          </div>
        </form>
      </div>
    );
  }
}

export default NewCardForm;
