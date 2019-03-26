import React, { Component } from 'react';
import { AuthUserContext } from '../Session';
import app from 'firebase/app';
import _ from 'lodash';


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
      messages: []
    }

    app.database().ref('chat').on('value', snapshot => {
      this.getMessages(snapshot.val());
    });
  }

  getMessages(values) {
    console.log("sherif");
    console.log(values);
    let messages = _(values)
    .keys()
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
    let mess = this.props.useremail + " said: " + this.state.message;
    e.preventDefault();
    app.database().ref('chat').push({
      message: mess,
      useremail: this.props.useremail,
      dateCreated: Date.now()
    });
    this.setState({
      message: '',
    });
  }

  render() {
    // get messages to display
    let messagesToDisply = this.state.messages.map((message) => message.message).join("\n");

    return (
      <div className="Chat">
      <AuthUserContext.Consumer>
        {authUser => (
        <div>
          <p>New message</p>
          <textarea
             disabled
             className="text-area"
             rows="20"
             cols="40"
             name="messageList"
             type="text"
             value={messagesToDisply}

             />
             <br />
          <form action="#" onSubmit={this.addMessage}>
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

// export default NewCardForm;
//
// function Chat() {
//
//   // addCard(e){
//   //    e.preventDefault();
//   //    app.database().ref('/chats').push({
//   //      message: this.state.message,
//   //      user:
//   //    });
//   //    this.setState({
//   //      title: '',
//   //      status: 'To do'
//   //    });
//   //  }
//
//
//   return(
//     <div>
//     <textarea
//       className="text-area"
//       rows="20"
//       cols="40"
//       name="details"
//       // onChange={this.updateInput}
//       type="text"
//       // value={this.state.details}
//       />
//       <br />
//         <input
//           className="input"
//           name="title"
//           id="newTaskTitleField"
//           // onChange={this.updateInput}
//           type="text"
//           placeholder="Enter a message to chat"
//           // value={this.state.title}
//         />
//     </div>
//   )
// }

export default Chat


// User has: doCreateUserWithEmailAndPassword
// index.js:32 User has: doSignInWithEmailAndPassword
// index.js:32 User has: doSignOut
// index.js:32 User has: doPasswordReset
// index.js:32 User has: doPasswordUpdate
// index.js:32 User has: user
// index.js:32 User has: users
// index.js:32 User has: cards
// index.js:32 User has: auth
// index.js:32 User has: db
