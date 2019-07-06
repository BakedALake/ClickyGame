import React from "react";

var ScoreBox = function statelessFunctionComponentClass(props){
var score = 0;
var topScore = 0;
var scoreString

score = (props.score);
if (topScore < score){
  topScore = score;
}
scoreString = ("Score: " + score + " | Top Score: " + topScore);

  return (
    <h1>{scoreString}</h1>
  )
};

export default ScoreBox;