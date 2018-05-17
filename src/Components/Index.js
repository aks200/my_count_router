import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./Home";
import {About} from "./About";
import {Contact} from "./Contact";

class Index extends Component {
  render() {
    return (
      <Router>
        <div>
       
              <Link to="/home">HOME</Link>
              {"  "}
              <Link to="/about">ABOUT</Link>
              {"  "}     
              <Link to="/contactus">CONTACTUS</Link>
            

          <Route exact path="/home" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contactus" component={Contact} />
        </div>
      </Router>
    );
  }
}

export default Index;
