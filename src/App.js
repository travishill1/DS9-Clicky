import React from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import Nav from "./components/Nav";
import "./App.css";

// Refactor the App component so that it's a class component. Set the component's initial state to the friends JSON array. 
// Inside of the render method, map over this.state.friends to render each FriendCard component.

// Refactor the App component so that rather than rendering each FriendCard component manually, 
// use a map to render one FriendCard component for each object in the friends JSON, passing in the appropriate props.

class App extends React.Component {
  state = {
    friends,
    currentScore: 0,
    topScore: 0,
    message: "Click any character to Engage",
    clicked: [13]
  };

  render(){
    return (
      <div>
      <Nav 
      message = {this.state.message}
      currentScore = {this.state.currentScore} 
      topScore = {this.state.topScore} />
      <Wrapper>
        <div className="header-area"></div>
        <div className="cards-area">
        {this.state.friends.map(friend => (
          <FriendCard
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

export default App;
