import React from "react";
import Header from "../../components/Header";
import {Link} from "react-router-dom";
import "./Landpage.css";
import styled from "styled-components";

const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 200px;
`;


const Img = styled.img`
  vertical-align: middle;
  display: inline-block;
  padding-right:30px;
  padding-left:30px;
  @media screen and (max-width: 768px){
	  width:100%;
  }
  @media screen and (max-width: 992px){
	width:100%;
}
`;

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
          <ImgWrapper>
			      <Img src={require("../images/owl.png").default}/>
          </ImgWrapper>
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
