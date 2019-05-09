import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

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

        <Container>
          <Row>
            <Col>1 of 3</Col>
            <Col>2 of 3</Col>
            <Col>3 of 3</Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default Main;
