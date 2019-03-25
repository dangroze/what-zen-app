import React, { Component } from 'react';
import app from 'firebase/app';


class NewCardForm extends Component {
  constructor(props) {
    super(props)
    this.updateInput = this.updateInput.bind(this);
    this.addCard = this.addCard.bind(this);
    this.state = {
      title: '',
      body: '',
      state: 'todo'
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
      state: 'To do'
    });
    this.setState({
      title: '',
      state: 'To do'
    });
  }

  render() {
    return (
      <div className="NewCardForm">
      <div> {this.props.state} </div>

        <form action="#" onSubmit={this.addCard} id="SubmitNewTask">
          <div><input
            required
            className="input"
            name="title"
            id="newTaskTitleField"
            onChange={this.updateInput}
            type="text"
            placeholder="Enter a new task here"
            value={this.state.title}
          /></div>
        </form>
      </div>
    );
  }
}

export default NewCardForm;
