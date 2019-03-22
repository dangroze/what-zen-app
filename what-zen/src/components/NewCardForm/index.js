import React, { Component } from 'react';

class NewCardForm extends Component {
  render() {
    return (
      <div className="NewCardForm">
        <form onSubmit={this.onSubmit}>
          <input
            name="body"
            onChange={this.onChange}
            type="text"
            placeholder="New task"
          />
          <button type="submit">
            Create
          </button>
        </form>
      </div>
    );
  }
}

export default NewCardForm;
