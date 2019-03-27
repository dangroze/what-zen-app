import React, { Component } from 'react';
import { withAuthorization } from '../Session';
import CardList from '../CardList';
import NewCardForm from '../NewCardForm';
import { AuthUserContext } from '../Session';
import Chat from '../Chat'

class Home extends Component {
  constructor(props) {
    super(props)
    console.log(this.props.firebase)
  }

  render() {
    return (
      <AuthUserContext.Consumer>
        {authUser => (
      <div>
        {authUser ? <p style={{color: "teal"}}>Logged in as: {authUser.email}</p> : null}
        <div className="section">
          <div className="columns">
            <div className="column">
              <div className="column">
                  <NewCardForm db={this.props.firebase} useremail={authUser.email}/>
              </div>
              <hr/>
              <div>
                <h3>Your board's chatting area</h3>
              </div>
              <div className="chatDiv">
                <Chat db={this.props.firebase} useremail={authUser.email.split('@')[0]}/>
              </div>
            </div>
            <div className="column">
              <div className="column">
                <CardList db={this.props.firebase} status='To do'/>
              </div>
            </div>
            <div className="column">
              <div className="column">
                <CardList db={this.props.firebase} status='Doing'/>
              </div>
            </div>
            <div className="column">
              <div className="column">
                <CardList db={this.props.firebase} status='Done'/>
              </div>
            </div>
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
