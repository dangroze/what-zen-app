import React, { Component } from 'react';
import { AuthUserContext } from '../Session';
import app from 'firebase/app';
import _ from 'lodash';
import './Chat.css'

class Chat extends Component {
  constructor(props) {
    super(props);
    this.updateInput = this.updateInput.bind(this);
    this.addMessage = this.addMessage.bind(this);
    this.state = {
      text: '',
      user: this.props.db,
      useremail: '',
      date: '',
      messages: [],
      username: ""
    };

    app
      .database()
      .ref("chat")
      .on("value", snapshot => {
        this.getMessages(snapshot.val());
      });
  }

  getMessages(values) {
    let messages = _(values)
      .keys()
      .reverse()
      .map(messageKey => {
        let cloned = _.clone(values[messageKey]);
        cloned.key = messageKey;
        return cloned;
      })
      .value();
    this.setState({ messages: messages });
  }

  updateInput(e) {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  }

  addMessage(e) {
    let fullDate = Date(Date.now());
    fullDate = fullDate.toString();
    let date = fullDate.split(" ");
    date = `on ${date[2]}/${date[1]}/${date[3]} at ${date[4]}`
    let text = this.state.text;
    e.preventDefault();
    app.database().ref('chat').push({
      text: text,
      useremail: this.props.useremail,
      date: date,
      username: this.state.username,
      displayColor: this.colorPicker(this.props.useremail),
    });
    this.setState({
      text: '',
    });
  }

  colorPicker(useremail) {
    let sumCharactersAsNumbers = 0
    let i = useremail.length
    while (i--) {
      sumCharactersAsNumbers = sumCharactersAsNumbers + useremail.charCodeAt(i)
    }
    const seed = sumCharactersAsNumbers % 10
    console.log('seed=' + seed)
    const coloursArray = ['ed4949', '363537', 'ed7d3a', '5833ff', '1c7243', '0b4f6c', 'ff3374', 'be33ff', 'ff33da', '5d1e19']
    return '#' + coloursArray[seed];
  }

  render() {
    let messagesToDisplay = this.state.messages.map(
      (message) =>
        <div>
          <p>
            <div
              className="displayName"
              style={{color: message.displayColor}}
            >
              {message.useremail}
            </div> said {message.date}:<br/>
            {message.text}
          </p>
          <br/>
        </div>
    )

    return (
      <div className="Chat">
        <AuthUserContext.Consumer>
          {authUser => (
            <div>
              <form
                action="#"
                onSubmit={this.addMessage}
                className="messageForm"
              >
                <div>
                  <input
                    required
                    className="input"
                    name="text"
                    onChange={this.updateInput}
                    type="text"
                    placeholder="Enter a new message here"
                    value={this.state.text}
                  />
                </div>
              </form>
          <br />
          <div
            className="chatDisplay scrollable"
            name="messageList"
          >
            {messagesToDisplay}
          </div>
        </div>
        )}
      </AuthUserContext.Consumer>
      </div>
    );
  }
}
export default Chat;
