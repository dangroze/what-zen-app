import React, { Component } from "react";
import _ from "lodash";
import app from "firebase/app";
import "./CardsCount.css";

class CardsCount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: []
    };
    app
      .database()
      .ref("cards")
      .on("value", snapshot => {
        this.getData(snapshot.val());
      });
  }

  getData(values) {
    let cardsVal = values;
    let cards = _(cardsVal)
      .keys()
      .reverse()
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

  render() {
    let count = 0;

    for (let index in this.state.cards) {
      if (this.state.cards[index].status === this.props.status) {
        count++;
      }
    }

    return <p className="CardsCount">{count}</p>;
  }
}

export default CardsCount;
