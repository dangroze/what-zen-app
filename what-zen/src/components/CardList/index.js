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
    console.log(snapshot.val())
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
        return cloned;
      })
      .value();
    this.setState({
      cards: cards
    });
  }

  render(){
    let cardNodes = this.state.cards.map((card) => {
      console.log(this.state.cards)
      return ( 
        <div className="card">
          <div className="card-content">
          <Card card = {card.title}/>
          <Card card = {card.body}/>
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