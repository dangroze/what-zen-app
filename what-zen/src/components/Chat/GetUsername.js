// import React from 'react'
// import { AuthUserContext } from '../Session';
// import app from 'firebase/app';
// import _ from 'lodash';
//
// function GetUsername (userEmail){
//   app.database().ref('users').on('value', snapshot => {
//     this.getUsers(snapshot.val());
//   });
// }
//
// function getUsers(values) {
//   let users = _(values)
//   .keys()
//   .map(userKey => {
//     let cloned = _.clone(values[userKey]);
//     cloned.key = userKey;
//     // console.log('Sherif username: ')
//     // console.log(cloned);
//     return cloned;
//     // console.log('End of Sherif username console.log')
//   })
//   .value();
//   this.setState({users: users});
//
//   return "Sherif"
// }
//
// export default GetUsername
