import React, { Component } from 'react';
import Card from '../Card';
import _ from 'lodash';


class CardList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cards: []
    };

    let app = this.props.db.database().ref('cards');
    app.on('value', snapshot => {
      this.getData(snapshot.val());
    });
  }

  getData(values){
    let cardsVal = values;
    let cards = _(cardsVal)
      .keys()
      .map(cardKey => {
        let cloned = _.clone(cardsVal[cardKey]);
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
    let app = this.props.db.database().ref('cards');
    app.child(card.key).remove()
  }

  nextStage = (card)=> {
    let app = this.props.db.database().ref('cards')
    if (card.state === 'To do') {
      app.child(card.key).update({
        state: 'Doing'
      }) } else {
        app.child(card.key).update({
          state: 'Done'
        });
      };
  };

  render(){
    let cardNodes = this.state.cards.map((card) => {
      if (card.state === this.props.state) {
      return ( 
        <div className="card">
          <div className="card-content">
          <Card card = {card.title}/>
          { (card.state !== 'Done' ) ? 
            <button value={card} onClick={()=>this.nextStage(card)}>Next Stage</button>
          :
          null
          }
            <button value={card} onClick={()=>this.deleteCard(card)}>Delete</button>
          </div>
        </div>
      )}
    });
    return (
      <div>
         <div> {this.props.state} </div>
        {cardNodes}
      </div>
    )
  }
}

export default CardList