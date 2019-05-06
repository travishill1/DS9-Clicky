import React, { Component } from "react";
import Nav from "./components/Nav";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import "./App.css";

class App extends Component {
  state = {
    friends,
    currentScore: 0,
    topScore: 0,
    clicked: [13],
    message: "Click any character to Engage"
  };

  cardClick = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.correctGuess();
      this.setState({ clicked: this.state.clicked.concat(id) });
    } else {
      this.wrongGuess();
    }
  };

  correctGuess = () => {
    const newScore = this.state.clicked.length;
    this.setState({
      currentScore: newScore,
      message: "Excellent work ensign."
    });
    if (newScore === 12) {
      this.setState({ message: "Congratulations, you've won!" });
    }
    else if (newScore >= this.state.topScore) {
      this.setState({ topScore: newScore });
    }
    this.cardShuffle();
  };

  wrongGuess = () => {
    this.setState({
      currentScore: 0,
      topScore: this.state.topScore,
      message: "You need more training.",
      clicked: []
    });
    this.cardShuffle();
  };

  cardShuffle = () => {
    let shuffledCards = shuffleAll(friends);
    this.setState({ friends: shuffledCards });
  };

  render() {
    return (
      <div>
        <Nav
          message={this.state.message}
          currentScore={this.state.currentScore}
          topScore={this.state.topScore} />
        <Wrapper>
          <div className="header-area"></div>
          <div className="cards-area">
            {this.state.friends.map(friend => (
              <FriendCard
                cardClick={this.cardClick}
                id={friend.id}
                key={friend.id}
                image={friend.image}
              />
            )
            )}
          </div>
        </Wrapper>
      </div>
    );
  }
}

const shuffleAll = (friends) => {
  for (let i = friends.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [friends[i], friends[j]] = [friends[j], friends[i]];
  }
  return friends;
};

export default App;
