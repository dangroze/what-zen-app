import React, { Component } from 'react';
import { withAuthorization } from '../Session';
import CardList from '../CardList';
import CardsCount from '../CardsCount';
import NewCardForm from '../NewCardForm';
import { AuthUserContext } from '../Session';
import Chat from '../Chat'
import './Home.css';

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
            <div className="column outerCardsList">
              <h2>Create a new task</h2>
              <div className="column">
                <NewCardForm db={this.props.firebase} useremail={authUser.email}/>
                <hr/>
                <h2>Your board's chatting area</h2>
                <div className="column innerCardsList scrollable chatDiv">
                  <Chat db={this.props.firebase} useremail={authUser.email.split('@')[0]}/>
                </div>
              </div>
            </div>
            <div className="column outerCardsList">
              <h2>To do (<CardsCount db={this.props.firebase} status='To do' />)</h2>
              <div className="column innerCardsList scrollable">
                <CardList db={this.props.firebase} status='To do'/>
              </div>
            </div>
            <div className="column outerCardsList">
              <h2>In progress (<CardsCount db={this.props.firebase} status='Doing' />)</h2>
              <div className="column innerCardsList scrollable">
                <CardList db={this.props.firebase} status='Doing'/>
              </div>
            </div>
            <div className="column outerCardsList">
              <h2>Done (<CardsCount db={this.props.firebase} status='Done' />)</h2>
              <div className="column innerCardsList scrollable">
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
