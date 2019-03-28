import React, { Component } from "react";
import "./landing.css";
import zen from "../../zen.svg";

class Landing extends Component {
  render() {
    return (
      <div className="Landing">
        <h1 style={{ margin: 10 }}>What Zen</h1>
        <img src={zen} className="App-logo" alt="logo" />
        <h3 style={{ margin: 2 }}>Minimalist Kanban.</h3>
        <h3 style={{ margin: 2 }}>Distraction is away.</h3>
      </div>
    );
  }
}

export default Landing;
