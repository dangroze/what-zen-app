import React, { Component } from 'react';
import app from 'firebase/app';
import Card from '../Card';


class CardDetailsForm extends Component {
  // constructor(props) {
  //   super(props)
  //   this.updateInput = this.updateInput.bind(this);
  //   this.addCardDetails = this.addCardDetails.bind(this);
  //   this.state = {
  //     title: '',
  //     status: 'todo',
  //     details: ''
  //   }
  // }

  updateInput(e){
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  }

  // addCardDetails(e){
  //   e.preventDefault();
  //   let appl = app.database().ref('cards')
  //   appl.child(this.props.card.key).update({
  //     title: this.state.title,
  //     details: this.state.details
  //   })
  //   this.setState({
  //     title: this.state.title,
  //     details: this.state.details
  //   });
  // }



  render() {
    return (
      <div className="NewCardForm">
        <form action="#" onSubmit={this.addCardDetails}>
          <div><input
            className="input"
            name="title"
            // onChange={this.updateInput}
            type="text"
            placeholder={this.props.card.title}
            // value={this.state.title}
          /></div>
          <div><textarea 
            className="textarea"
            name="details"
            // onChange={this.updateInput}
            type="text"
            placeholder="Add details here"
            // value={this.state.details}
          /></div>
          <div><textarea 
            className="textarea"
            name="comments"
            // onChange={this.updateInput}
            type="text"
            placeholder="Add comments here"
            // value={this.state.comments}
          /></div>
            <button className="button is-small" onClick={()=>this.addCardDetails}>V</button>
        </form>
      </div>
    );
  }
}

export default CardDetailsForm;
