import React, { Component } from 'react';
import './about.css'
import zen from '../../zen.svg'
import decisionMatrix from '../../decisionMatrix.jpeg'
import Popup from 'reactjs-popup';

class About extends Component {

  render() {
    return (
      <div className="About">
        <h1>About What Zen</h1>
        <img src={zen} style={{height: '50px'}} className="App-logo" alt="logo" />
        <h2>Make wiser decisions based on the</h2>
        <Popup trigger={<button className="button is-large">Eisenhower Matrix</button>} position="bottom center">
          <img className='decisionMatrix' src={decisionMatrix}/>
        </Popup>
        <h3>as recommended by Joy Officer <a href='https://blog.makersacademy.com/how-to-make-a-decision-588d0247ace0'>Dana</a></h3>
      </div>

    );
  }
}

export default About;
