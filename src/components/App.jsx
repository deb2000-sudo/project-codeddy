import React, { Component } from "react";

class Editor extends Component {
  render() {
    return (
        <div className="container">
            <div className="header">
                <h1>CodEddy</h1>
            </div>
            <div className="input-group">
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