import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

class Footer extends Component {
  render() {
    return (
      <div className="Footer text-focus-in-fifth">
<p class="footerText">Designed and built with all the love in the world by <a href="https://twitter.com/dpuiatti" target="_blank"  rel="noopener">dpuiatti</a>. Maintained with your help.</p>
        
        <Container className="footerButtonsWrapper">
          <Row>
            <Col><a href="https://danskii.github.io/Daniel-Puiatti/" target="_blank" rel="noopener">About</a></Col>
            <Col><a href="mailto:dpuiatti@gmail.com" target="_blank" rel="noopener">Contact</a></Col>
            <Col><a href="https://github.com/Danskii" target="_blank" rel="noopener">Git</a></Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default Footer;

