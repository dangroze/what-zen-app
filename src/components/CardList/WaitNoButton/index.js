import React, { Component } from 'react';

class WaitNoButton extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="WaitNoButton" onClick={this.props.close}>
        <button className="button is-small">Wait, no!</button>
      </div>
    );
  }
}

export default WaitNoButton;
