import React, { Component } from 'react';

class NewCardForm extends Component {
  constructor(props) {
    super(props)
    this.updateInput = this.updateInput.bind(this);
    this.addCard = this.addCard.bind(this);
    this.state = {
      title: '',
      body: '',
      // key: '',
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
      body: this.state.body,
      // key: db.database()
    });
    this.setState({
      title: '',
      body: '',

    });
  }

  render() {
    return (
      <div className="NewCardForm">
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
          {/* <div><textarea
            required
            className="textarea"
            name="body"
            id="newTaskBodyField"
            onChange={this.updateInput}
            type="textarea"
            placeholder="Details"
            value={this.state.body}>
          </textarea></div>
          <input type="submit" value="Create task" /> */}
        </form>
      </div>
    );
  }
}

export default NewCardForm;
