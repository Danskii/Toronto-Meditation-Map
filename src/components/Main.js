import React, { Component } from "react";
import { Jumbotron } from "react-bootstrap";

class Main extends Component {
  render() {
    return (
      <div className="Main">
        <div className="ripple-background">
          <div className="circle xxlarge shade1" />
          <div className="circle xlarge shade2" />
          <div className="circle large shade3" />
          <div className="circle mediun shade4" />
          <div className="circle small shade5" />
        </div>
        <Jumbotron className="homepageWelcome" > 
  <h1>Hello and welcome</h1>
  <p>
    These are my favourite locations to meditate in Toronto. The map below has each location charted out and includes photos of the spot.
  </p>
</Jumbotron>

      </div>
    );
  }
}
export default Main;
