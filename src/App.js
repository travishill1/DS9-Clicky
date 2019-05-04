import React from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import "./App.css";

// Refactor the App component so that it's a class component. Set the component's initial state to the friends JSON array. 
// Inside of the render method, map over this.state.friends to render each FriendCard component.

// Refactor the App component so that rather than rendering each FriendCard component manually, 
// use a map to render one FriendCard component for each object in the friends JSON, passing in the appropriate props.

class App extends React.Component {
  state = {
    friends: friends
  };

  // removeFriend = id => {
  //   const friends = this.state.friends.filter(friend => friend.id !== id);
  //   this.setState({ friends });
  // };

  render(){
    return (
      <Wrapper>
        <h1 className="title">React Clicky Game</h1>
        <h3 className="subtext">Click on an image to earn points, but don't click on any more than once!</h3>
        {this.state.friends.map(friend => (
          <FriendCard
            // name={friend.name}
            id={friend.id}
            key={friend.id}
            image={friend.image}
            // occupation={friend.occupation}
            // location={friend.location}
          />
        )
        )}
      </Wrapper>
    );
  }
}

export default App;
