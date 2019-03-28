import React, { Component } from 'react';

class YesButton extends Component {
  constructor(props) {
    super(props)
  }

  handleYes = () => {
    this.props.close()
    this.props.deleteCard(this.props.card)
  }

  render() {
    return (
      <div className="YesButton" onClick={this.handleYes}>
        <button className="button is-small">Yes, I'm sure.</button>
      </div>
    );
  }
}

export default YesButton;
