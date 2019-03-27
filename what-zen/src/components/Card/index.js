import React, {Component} from 'react';

class Card extends Component {



  render(){
    return (
      <div id="main">
        {this.props.card}        
      </div>
    )
  }
}
export default Card