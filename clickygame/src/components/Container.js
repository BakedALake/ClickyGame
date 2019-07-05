import React, { Component } from "react";
import Character from "./Character";
import characters from "../characters.json"

var numArray = [];
var charArray = [];

class Container extends Component {
  state = {

  };

  // handleStateChange = page => {
  //   this.setState({ currentPage: page });
  // };

  renderPage = () => {

  };

  heroSorter = () => {
    for (var i = 1; i <= 28;) {
      var ranNum = (Math.floor(Math.random() * 28) + 1);
      if (!numArray.includes(ranNum)) {
        console.log("Character number " + (i) + " is " + characters[ranNum - 1].name);
        i++;
        numArray.push(ranNum);
        charArray.push(<Character
          id={ranNum - 1}
          name={characters[ranNum - 1].name}
          image={characters[ranNum - 1].image}
          clicked={characters[ranNum - 1].clicked}
        />);
      }
    }
    return (
      charArray
    )
  }

  render() {
    const characters = this.heroSorter()
    return (
      <div>
        <div className='row'>
          <div className='col-1'>
            {characters[0]}
          </div>
          <div className='col-1'>
          {characters[1]}
          </div>
          <div className='col-1'>
          {characters[2]}
          </div>
          <div className='col-1'>
          {characters[3]}
          </div>
          <div className='col-1'>
          {characters[4]}
          </div>
          <div className='col-1'>
          {characters[5]}
          </div>
          <div className='col-1'>
          {characters[6]}
          </div>
        </div>
        <div className='row'>
          <div className='col-1'>
          {characters[7]}
          </div>
          <div className='col-1'>
          {characters[8]}
          </div>
          <div className='col-1'>
          {characters[9]}
          </div>
          <div className='col-1'>
          {characters[10]}
          </div>
          <div className='col-1'>
          {characters[11]}
          </div>
          <div className='col-1'>
          {characters[12]}
          </div>
          <div className='col-1'>
          {characters[13]}
          </div>
        </div>
        <div className='row'>
          <div className='col-1'>
          {characters[14]}
          </div>
          <div className='col-1'>
          {characters[15]}
          </div>
          <div className='col-1'>
          {characters[16]}
          </div>
          <div className='col-1'>
          {characters[17]}
          </div>
          <div className='col-1'>
          {characters[18]}
          </div>
          <div className='col-1'>
          {characters[19]}
          </div>
          <div className='col-1'>
          {characters[20]}
          </div>
        </div>
        <div className='row'>
          <div className='col-1'>
          {characters[21]}
          </div>
          <div className='col-1'>
          {characters[22]}
          </div>
          <div className='col-1'>
          {characters[23]}
          </div>
          <div className='col-1'>
          {characters[24]}
          </div>
          <div className='col-1'>
          {characters[25]}
          </div>
          <div className='col-1'>
          {characters[26]}
          </div>
          <div className='col-1'>
          {characters[27]}
          </div>
        </div>
      </div>
    )
  }
}

export default Container;