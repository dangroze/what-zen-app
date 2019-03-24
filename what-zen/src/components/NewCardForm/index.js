import React, { Component } from 'react';

class NewCardForm extends Component {
  constructor(props) {
    super(props)
    this.updateInput = this.updateInput.bind(this);
    this.addCard = this.addCard.bind(this);
    this.state = {
      title: '',
      body: '',
    }
  }

  updateInput(e){
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  }

  addCard(e){
    e.preventDefault();
    let database = this.props.db.database().ref('/cards');
    database.push({
      title: this.state.title,
      body: this.state.body
    });
    this.setState({
      title: '',
      body: '', 
    });
  }

  render() {
    return (
      <div className="NewCardForm">
        Do you have a new task?
        <form action="#" onSubmit={this.addCard} id="SubmitNewTask">
          <div><input
            className="input"
            name="title"
            id="newTaskTitleField"
            onChange={this.updateInput}
            type="text"
            placeholder="Title"
            value={this.state.title}
          /></div>
          <div><textarea
            className="textarea"
            name="body"
            id="newTaskBodyField"
            onChange={this.updateInput}
            type="textarea"
            placeholder="Details"
            value={this.state.body}>
          </textarea></div>
          <input type="submit" value="Create task" />
        </form>
      </div>
    );
  }
}

export default NewCardForm;
