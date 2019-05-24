import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

class Footer extends Component {
  render() {
    return (
      <div className="Footer text-focus-in-fifth">
        <p class="footerText">
          {" "}
          Designed and built with all the love in the world by{" "}
          <a href="https://twitter.com/dpuiatti" target="_blank" rel="noopener">
            {" "}
            dpuiatti{" "}
          </a>
          . Maintained with your help.
        </p>
        <Container className="footerButtonsWrapper">
          <Row>
            <Col>
              {" "}
              <a
                href="https://danskii.github.io/Daniel-Puiatti/"
                target="_blank"
                rel="noopener"
              >
                {" "}
                About{" "}
              </a>
            </Col>
            <Col>
              {" "}
              <a
                href="mailto:dpuiatti@gmail.com"
                target="_blank"
                rel="noopener"
              >
                {" "}
                Contact{" "}
              </a>
            </Col>
            <Col>
              {" "}
              <a
                href="https://github.com/Danskii"
                target="_blank"
                rel="noopener"
              >
                {" "}
                Git{" "}
              </a>
            </Col>
          </Row>{" "}

          <p class="footerTextShare">
          {" "}
         Spread the serenity, share this page:{" "}
        </p>
          <Row>
            <Col className="socialIconWrapper">
              {" "}
              <a
                href="https://www.facebook.com/sharer.php?u=https%3A%2F%2Fdanskii.github.io%2FToronto-Meditation-Map%2F"
                target="blank"
                rel="noopener noreferrer"
              >
              <img className="socialIcon" src={require("./images/facebook-icon.png")} alt="Share Page on Facebook" />
     
                {" "}
                {" "}
              </a>
              {" "}
              <a
                href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fdanskii.github.io%2FToronto-Meditation-Map%2F&text=Looking%20for%20a%20spot%20to%20meditate%20in%20Toronto%3F%20Check%20out%20this%20neat%20free%20meditation%20map:&hashtags=Toronto%20%23meditation%20%23mindfulness%20%23mentalhealth"
                target="blank"
                rel="noopener noreferrer"
              >
              <img className="socialIcon" src={require("./images/twitter-icon.png")} alt="Share Page on Twitter" />
                {" "}
                {" "}
              </a>
              {" "}
              <a
                href="https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fdanskii.github.io%2FToronto-Meditation-Map%2F&title=Toronto%20Meditation%20Map&summary=Take%20a%20moment%20to%20find%20inner-peace%20with%20the%20best%20locations%20to%20meditate%20in%20Toronto%20for%20free.%20This%20map%20lists%20them%20all."
                target="blank"
                rel="noopener noreferrer"
              >
              <img className="socialIcon" src={require("./images/linkedin-icon.png")} alt="Share Page on LinkedIn" />
                {" "}
               {" "}
              </a>
            </Col>
         
          </Row>{" "}
        </Container>{" "}
      </div>
    );
  }
}
export default Footer;
