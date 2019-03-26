// import React, { Component } from 'react';
// import { withAuthorization } from '../Session';
// import CardList from '../CardList';
// import NewCardForm from '../NewCardForm';
// import Chat from '../Chat'
// import app from 'firebase/app';
//
//
// class Home extends Component {
//   constructor(props) {
//     super(props)
//     console.log(this.props.firebase)
//   }
//
//   render() {
//     return (
//       <div className="Home">
//         <div className="columns">
//           <div className="column">
//             <div className="column">
//               <NewCardForm db={this.props.firebase}/>
//             </div>
//             <div>
//               <h3>Your board's chatting area</h3>
//             </div>
//             <div className="chatDiv">
//               <Chat db={this.props.firebase}/>
//             </div>
//           </div>
//           <div className="column">
//             <div className="column">
//               <CardList db={this.props.firebase} status='To do'/>
//             </div>
//           </div>
//           <div className="column">
//             <div className="column">
//               <CardList db={this.props.firebase} status='Doing'/>
//             </div>
//           </div>
//           <div className="column">
//             <div className="column">
//               <CardList db={this.props.firebase} status='Done'/>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
//
// const condition = authUser => authUser != null;
//
// export default withAuthorization(condition)(Home);










import React, { Component } from 'react';
import { withAuthorization } from '../Session';
import CardList from '../CardList';
import NewCardForm from '../NewCardForm';
import { AuthUserContext } from '../Session';
import { withAuthentication } from '../Session';
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
        <div className="section">
          <div className="columns">
            <div className="column">
              <div className="column">
                  <NewCardForm db={this.props.firebase} useremail={authUser.email}/>
              </div>
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
