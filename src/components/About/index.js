import React, { Component } from 'react';
import './about.css'
import zen from '../../zen.svg'
import Popup from 'reactjs-popup';
import MatrixSquare from '../MatrixSquare/index'

class About extends Component {

  render() {
    return (
      <div className="About">
        <h1 style={{padding: '10px'}}>About What Zen</h1>
        <img src={zen} style={{height: '50px'}} className="App-logo" alt="logo" />
        <br/>

        <div className='columns'>
          <div className='column'>
            <h2>Make wiser decisions based on the</h2>

            <Popup trigger={<button className="button is-large">Eisenhower Matrix</button>} modal position="center top">
              <div className='container' style={{padding: '10'}}>
                <div className='top-left-corner'></div>
                <div className='top-label'>
                  <h2>Urgent</h2>
                </div>
                <div className='top-label'>
                  <h2>Not Urgent</h2>
                </div>
                <div className='left-label'>
                  <h2>Important</h2>
                </div>
                <MatrixSquare color="green" quadrant='do' example='sort Brexit'></MatrixSquare>
                <MatrixSquare color="blue" quadrant='plan' example='get fit'></MatrixSquare>
                <div className='left-label'>
                  <h2>Not Important</h2>
                </div>
                <MatrixSquare color="yellow" quadrant='postpone' example='reply to emails'></MatrixSquare>
                <MatrixSquare color="red" quadrant='eliminate' example='catch up with latest news'></MatrixSquare>
              </div>
              <h2 style={{margin: '10'}}>(When cards are red, it's time to shed.)</h2>
            </Popup>

            <a href='https://blog.makersacademy.com/how-to-make-a-decision-588d0247ace0'><h2>as recommended by Chief Joy Officer Dana</h2></a>
          </div>
        </div>
      </div>

    );
  }
}

export default About;
