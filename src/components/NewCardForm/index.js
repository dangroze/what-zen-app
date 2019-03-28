import React, { Component } from "react";
import app from "firebase/app";

class NewCardForm extends Component {
  constructor(props) {
    super(props);
    this.updateInput = this.updateInput.bind(this);
    this.addCard = this.addCard.bind(this);
    this.state = {
      title: "",
      details: "",
      status: "todo",
      comments: "",
      user: "",
      important: false,
      urgent: false,
      timeCreated: ""
    };
  }

  updateInput(e) {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  }

  addCard(e) {
    e.preventDefault();
    if (!this.state.urgent && !this.state.important) {
      alert('If it\'s neither important nor urgent, consider postponing or delegating.');
      return null;
    }
    let fullDate = Date(Date.now());
    fullDate = fullDate.toString();
    let date = fullDate.split(" ");
    date = `on ${date[2]}/${date[1]}/${date[3]} at ${date[4]}`
    app.database().ref('/cards').push({
      title: this.state.title,
      status: 'To do',
      user: this.props.useremail,
      details: this.state.details,
      comments: '',
      important: this.state.important,
      urgent: this.state.urgent,
      timeCreated: date,
    });
    this.props.close()
  }
  render() {
    return (
      <div name="NewCardForm">
        <form action="#" onSubmit={this.addCard}>
          Title
          <button
            type='button'
            id="corner-x"
            className="button is-small"
            onClick={this.props.close}
          >
            &times;
          </button>
          <input
            required
            className="input"
            name="title"
            placeholder="Enter a new task here. (Unless it's not important or urgent.)"
            onChange={this.updateInput}
            type="text"
            value={this.state.title}
          />
          <div><input
            type="checkbox"
            name="urgent"
            className="switch is-success"
            onClick={ () => {
              this.setState({ urgent: !this.state.urgent})
            } }/><label for="urgent"> urgent </label></div>
          <div><input
            type="checkbox"
            name="important"
            className="switch is-success"
            onClick={ () => {
              this.setState({ important: !this.state.important })
            } }/><label for="urgent"> important </label></div>
          Details
          <textarea
            defaultValue= {this.state.details}
            className="textarea"
            name="details"
            placeholder="Details"
            onChange={this.updateInput}
            type="text"
            value={this.state.details}
          />
          <button
            type='button'
            className="button is-small"
            id="Create"
            onClick={this.addCard}
          >
            Create
          </button>
        </form>
      </div>
    );
  }
}

export default NewCardForm;
