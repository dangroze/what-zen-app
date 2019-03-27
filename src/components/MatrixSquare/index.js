import React, {Component} from 'react';
import './matrixSquare.css'
import Card from '../Card/index'

class MatrixSquare extends Component {

  render(){
    return (
      <div id={this.props.color} className='MatrixSquare'>
        <h3>{this.props.quadrant}{
          (this.props.quadrant === 'postpone') ?
              '/ delegate'
            :
              null
          }
        </h3>
        <div className='fakeCard'>{this.props.example}</div>
      </div>
    )
  }
}
export default MatrixSquare
