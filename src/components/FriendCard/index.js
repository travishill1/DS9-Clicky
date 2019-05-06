import React from "react";
import "./style.css";

const FriendCard = props => {
  return (
    <div
      onClick={() => props.cardClick(props.id)}
      className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
    </div>
  );
}

export default FriendCard;
