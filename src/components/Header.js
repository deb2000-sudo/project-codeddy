import React from "react";
import { Link } from "react-router-dom";



const Header = ({Props}) => {
  return (
    <header style={Props.style} className="App-header">
      <Link className="App-title" to="/">Project Codeddy</Link>
      <div className="extras">{Props.extras}</div>
    </header>
  );
};

export default Header;