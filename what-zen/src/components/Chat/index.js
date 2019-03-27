import React, { Component } from 'react';
import { AuthUserContext } from '../Session';
import app from 'firebase/app';
import _ from 'lodash';
// import GetUsername from './GetUsername'


class Chat extends Component {
  constructor(props) {
    super(props)
    this.updateInput = this.updateInput.bind(this);
    this.addMessage = this.addMessage.bind(this);
    this.state = {
      message: '',
      user: this.props.db,
      useremail: '',
      dateCreated: '',
      messages: [],
      username: ''
    }

    app.database().ref('chat').on('value', snapshot => {
      this.getMessages(snapshot.val());
    });
  }

  getMessages(values) {
    let totalMsgs = 0;
    for(let msgs in _(values.messages)) {
      totalMsgs++
    }

    let messages = _(values)
    .keys().reverse()
    .map(messageKey => {
      let cloned = _.clone(values[messageKey]);
      cloned.key = messageKey;
      return cloned;
    })
    .value();
    this.setState({messages: messages});
  }

  updateInput(e){
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  }

  addMessage(e){
    // this.state.username = <GetUsername userEmail={this.props.useremail} />
    let fullDate = Date(Date.now());
    fullDate = fullDate.toString();
    let date = fullDate.split(" ");
    date = `on ${date[2]}/${date[1]}/${date[3]} at ${date[4]}`
    let mess = this.props.useremail + " said: (" + date + ")\n\t" + this.state.message;
    e.preventDefault();
    app.database().ref('chat').push({
      message: mess,
      useremail: this.props.useremail,
      dateCreated: Date.now(),
      username: this.state.username
    });
    this.setState({
      message: '',
    });
  }

  render() {
    // get messages to display
    let messagesToDisply = this.state.messages.map((message) => message.message).join("\n  ----  \n");

    return (
      <div className="Chat">
      <AuthUserContext.Consumer>
        {authUser => (
        <div>
          <textarea
             disabled
             id="text-area"
             className="text-area"
             rows="20"
             cols="40"
             name="messageList"
             type="text"
             value={messagesToDisply}
             />
             <br />
          <form action="#" onSubmit={this.addMessage} className="messageForm">
            <div>
              <input type='hidden' name='username' value='Sherif'/>
              <input
                required
                className="input"
                name="message"
                onChange={this.updateInput}
                type="text"
                placeholder="Enter a new message here"
                value={this.state.message}
              />
            </div>
          </form>
        </div>
        )}
      </AuthUserContext.Consumer>
      </div>
    );
  }
}

export default Chat
