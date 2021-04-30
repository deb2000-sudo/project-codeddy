import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import { LandPage, EditorPage } from "./pages/";

class App extends Component {
    render() {
      return (
        <Router>
          <div className="App">
            {/* <AppRouter /> */}
            <Route path="/Editor" component={EditorPage} />
            <Route exact path="/" component={LandPage} />
            
          </div>
        </Router>
      );
    }
  }

  export default App;