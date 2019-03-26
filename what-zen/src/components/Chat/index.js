import React, { Component } from 'react';
import { AuthUserContext } from '../Session';
import app from 'firebase/app';
import UserEmail from './UserEmail'


class Chat extends Component {
  constructor(props) {
    super(props)
    this.updateInput = this.updateInput.bind(this);
    this.addMessage = this.addMessage.bind(this);
    this.state = {
      message: '',
      user: this.props.db,
      user_email: UserEmail
    }
  }

  updateInput(e){
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  }

  addMessage(e){
    let mess = this.state.message;
    mess = this.state.user_email + " said: " + mess;
    e.preventDefault();
    app.database().ref('chat').push({
      message: mess
    });
    this.setState({
      message: '',
    });

    console.log(mess);
  }


  render() {
    return (
      <div className="NewCardForm">
        New message
        <textarea
           className="text-area"
           rows="20"
           cols="40"
           name="messageList"
           type="text"
           value={this.state.details}
           />
           <br />


        <form action="#" onSubmit={this.addMessage}>
          <div><input
            required
            className="input"
            name="message"
            onChange={this.updateInput}
            type="text"
            placeholder="Enter a new message here"
            value={this.state.message}
          /></div>
        </form>
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
