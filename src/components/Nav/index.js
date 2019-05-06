import React from "react";
import "./style.css";

function Nav(props) {
  return (
    <div className="row align-items-center nav">
    <span className="col-12 col-md-4 nav-title">DS9 Clicky Game</span>
    <span className="col-12 col-md-4 message">{props.message} </span>
    <span className="col-12 col-md-4 scores">Score: {props.currentScore} | Top Score: {props.topScore}</span>
  </div>
  );
}

export default Nav;

