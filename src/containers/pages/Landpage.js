import React from "react";
import Header from "../../components/Header";
import {Link} from "react-router-dom";

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
            Share Code within <span className="highlight">Share your code</span>.
            <br />
            Anywhere, Anytime and with <span className="highlight"> With Anyone</span>
            .
          </p>

          <p className="sub-title">
            A code Editor app powered By WEB-WIZ
          </p>
          <div>
            <Link to="/Editor">
            
              Share YOUR Code NOW
        

            </Link>
          </div>
        </div>
      </React.Fragment>
    );
  }
  export default Landpage;
