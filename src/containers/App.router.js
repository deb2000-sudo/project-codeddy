import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { LandPage, EditorPage } from "./pages/";

export default class AppRouter extends React.Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Route exact path="/" component={LandPage} />
          <Route path="/" component={EditorPage} />
        </React.Fragment>
      </Router>
    );
  }
}
