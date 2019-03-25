import React, { Component } from 'react';
import Card from '../Card';
import _ from 'lodash';
import app from 'firebase/app';
import CardDetailsForm from '../CardDetailsForm';
import Popup from 'reactjs-popup';

class CardList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cards: [],

    };
    app.database().ref('cards').on('value', snapshot => {
      this.getData(snapshot.val());
    });
  }

  getData(values){
    let cardsVal = values;
    let cards = _(cardsVal)
      .keys()
      .map(cardKey => {
        console.log(cardsVal)
        let cloned = _.clone(cardsVal[cardKey]);
        console.log(cloned)
        cloned.key = cardKey;
        return cloned
        ;
      })
      .value();
    this.setState({
      cards: cards
    });
  }

  deleteCard = (card)=> {
    app.database().ref('cards').child(card.key).remove()
  }

  nextStage = (card)=> {
    let appl = app.database().ref('cards')
    if (card.status === 'To do') {
      appl.child(card.key).update({
        status: 'Doing'
      }) } else {
        appl.child(card.key).update({
          status: 'Done'
        });
      };
  };

  previousStage = (card)=> {
    let appl = app.database().ref('cards')
    if (card.status === 'Done') {
      appl.child(card.key).update({
        status: 'Doing'
      }) } else {
        appl.child(card.key).update({
          status: 'To do'
        });
      };
  };

  render(){
    let cardNodes = this.state.cards.map((card) => {
      if (card.status === this.props.status) {
        return (
          <div className="card">
            <div className="card-content">
              <Card card = {card.title}/>
            
              { ( card.status !== 'To do' ) ?
                <button className="button is-small" value={card} onClick={()=>this.previousStage(card)}> {'<'} </button>
                  : null
              } 
               { ( card.status !== 'Done' ) ?
                <button className="button is-small" value={card} onClick={()=>this.nextStage(card)}> {'>'} </button>
                  : null
              } 
              <Popup  trigger={<button className="button is-small">+</button>} position="right center">
                <CardDetailsForm card = {card}/>
              </Popup>
              <button className="button is-small" value={card} onClick={()=>this.deleteCard(card)}>x</button>

            </div>
          </div>
        )
      } return null
    })
    return (
      <div>
        <div> {this.props.status} </div>
        {cardNodes}
      </div>
    )
  }
}

export default CardList
