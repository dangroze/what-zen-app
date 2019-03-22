import React, { Component } from 'react';

class NewCardForm extends Component {
  constructor(props) {
    super(props)
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      body: ''
    }
  }

  onChange(e){
    e.preventDefault();
    this.setState({
      body: e.target.value
    });
  }

  onSubmit(e){
    e.preventDefault();

    let database = this.props.db.database().ref('/messages');
    database.child('newcard').set({
      body: this.state.body
    });
    this.setState({
      body: ''
    });
  }

  render() {
    return (
      <div className="NewCardForm">
        <form action="#" onSubmit={this.onSubmit}>
          <input
            name="body"
            onChange={this.onChange}
            // onSubmit={this.onSubmit}
            type="text"
            placeholder="New task"
            value={this.state.body}
          />
        </form>
      </div>
    );
  }
}

export default NewCardForm;
