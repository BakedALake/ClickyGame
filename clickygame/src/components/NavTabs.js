import React from "react";
import Title from "./Title";
import Message from "./Message";
import ScoreBox from "./ScoreBox";

// import "../styles/Navbar.css";

function NavTabs() {
  return (
    <ul className="nav nav-tabs">
      <li><Title /></li>
      <li><Message /></li>
      <li><ScoreBox /></li>
    </ul>
  )
}


export default NavTabs;