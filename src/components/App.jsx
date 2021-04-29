import React, { Component } from "react";

class Editor extends Component {
  render() {
    return (
        

       <div className="container">
            <div className="header">
                <h1>CodEddy</h1>
            </div>
            <div className="input-group">
              <div className="codeddy_header">
                  <div className="head_text">
                      <h3>Write Any code here</h3>
                 </div>
                 {/* <div className="dropdown"> */}
                      <select className="codeddy_dropdown" onChange="">
                         <option value="">Text</option>
                         <option value="">C/C++</option>
                         <option value="">python</option>
                      </select>
                 {/* </div> */}
              </div>
              <textarea 
                  className="text-box" 
                  id="text1"
                  rows="30"
                  cols="100">
              </textarea>
           </div>
        </div>
    );
    }
}

export default Editor;