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
    console.log(values)
    let cards = _(cardsVal)
      .keys()
      .map(cardKey => {
        let cloned = _.clone(cardsVal[cardKey]);
        console.log(cloned)
        cloned.key = cardKey;
        console.log(cloned.key)
        return cloned;
      })
      .value();
    this.setState({
      cards: cards
    });
    console.log(cards)
  }

  deleteCard = (card)=> {
    let app = this.props.db.database().ref('cards');
    app.child(card.key).remove()
  }

  render(){
    let cardNodes = this.state.cards.map((card) => {
      return ( 
        <div className="card">
          <div className="card-content">
          <Card card = {card.title}/>
          <button value={card} onClick={()=>this.deleteCard(card)}>Completed</button>
          </div>
        </div>
        )
      });
    return (
      <div>
        {cardNodes}
      </div>
    )
  }
}

export default CardList