import React from "react";
import Header from "../../components/Header";
import {Link} from "react-router-dom";
import "./Landpage.css";

var Props = {
  style: React.CSSProperties,
  extras: React.ReactHTML
};

function Landpage() {
    return (
      <React.Fragment>
        <Header
        Props = {Props}
        
        />
        <div className="Landpage">
          <p className="Pagetitle">
            <br />
            Welcome to <span className="highlight">CODEDDY</span>
            <br />
            Edit Anywhere, Anytime ... <span className="highlight"> With Anyone</span>
          </p>

          <p className="sub-title">
            A code Editor app powered By WEBWIZ
          </p>
          <div className="btnn">
            <Link to="/Editor" className="btn">
              SHARE YOUR CODE HERE!
            </Link>
          </div>
        </div>
      </React.Fragment>
    );
  }
  export default Landpage;
