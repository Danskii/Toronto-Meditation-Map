import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap';

class Main extends Component {
  render() {
    return (
      <div className="Main">
      
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