import React, { Component } from 'react';
import app from 'firebase/app';



class CardDetailsForm extends Component {
  constructor(props) {
    super(props)
    this.updateInput = this.updateInput.bind(this);
    this.addCardDetails = this.addCardDetails.bind(this);
    this.state = {
      title: null || this.props.card.title,
      status: 'todo',
      details: null || this.props.card.details,
      comments: null || this.props.card.comments

    }
  }

  updateInput(e){
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  }

  addCardDetails(e){
    e.preventDefault();
    let appl = app.database().ref('cards')
    appl.child(this.props.card.key).update({
      title: this.state.title,
      details: this.state.details,
      comments: this.state.comments
    })
    this.setState({
      title: this.state.title,
      details: this.state.details,
      comments: this.state.comments
    });
  }

  render() {
    return (
      <div className="NewCardForm">
        <form action="#" onSubmit={this.addCardDetails}>
          Title
          <div><input
            className="input"
            name="title"
            onChange={this.updateInput}
            type="text"
            value={this.state.title}
          /></div>
          Details
          <div><textarea
            defaultValue= {this.state.details}
            className="textarea"
            name="details"
            onChange={this.updateInput}
            type="text"
            value={this.state.details}
          /></div>
          Comments
          <div><textarea 
            defaultValue= {this.state.comments}
            className="textarea"
            name="comments"
            onChange={this.updateInput}
            type="text"
            value={this.state.comments}
          /></div>
            <button className="button is-small" onClick={()=>this.addCardDetails}>Save changes</button>
        </form>
      </div>
    );
  }
}

export default CardDetailsForm;
