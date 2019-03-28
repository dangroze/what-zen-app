import React, { Component } from 'react';
import { withAuthorization } from '../Session';
import { AuthUserContext } from '../Session';
import Popup from 'reactjs-popup';
import './Home.css';
import plus from '../../plus.png'
import CardList from '../CardList';
import Chat from '../Chat'
import CardsCount from '../CardsCount';
import NewCardForm from '../NewCardForm';

class Home extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const statuses = ['To do', 'Doing', 'Done']
    const columnsWithStatus = statuses.map(status => {
      return (
        <div className="column outerCardsList">
          <h2>{status}</h2>
          <div className="column innerCardsList scrollable">
            <CardList db={this.props.firebase} status={status}/>
          </div>
        </div>
      )
    })

    return (
      <AuthUserContext.Consumer>
        {authUser => (
      <div>
        {authUser ? <p style={{color: "teal"}}>Logged in as: {authUser.email}</p> : null}
        <div className="section" name="mainSection">
          <div className="columns">
            <div className="column outerCardsList">
              <h2>Create a new task</h2>
              <div className="column">
                <Popup trigger={
                  <button id="createNewTask" className="button is-large">
                    <img id='plus' alt='add task' src={plus}/>
                  </button>
                } modal position="center top">
                  {close =>
                    <NewCardForm db={this.props.firebase} useremail={authUser.email} close={close}/>
                  }
                </Popup>
                <hr/>
                <h2>Your board's chatting area</h2>
                <div className="column innerCardsList chatDiv">
                  <Chat db={this.props.firebase} useremail={authUser.email.split('@')[0]}/>
                </div>
              </div>
            </div>
            {columnsWithStatus}
          </div>
        </div>
      </div>
      )}
      </AuthUserContext.Consumer>
    );
  }
}
const condition = authUser => authUser != null;
export default withAuthorization(condition)(Home);
