import React, {Component} from 'react';

class Card extends Component {

  render(){
    return (
      <div>
        {this.props.card}
      </div>
    )
  }
}
export default Card