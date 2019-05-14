import React, { Component } from "react";
import { Twitter, Facebook, Mail, Whatsapp, Tumblr, Pinterest, Reddit, Telegram, VK, HackerNews } from "react-social-sharing";
import { Container, Row, Col } from "react-bootstrap";


class Social extends Component {
  render() {
    return (
      <div className="Social">
        <Row>
        <Col>
            <Mail link="https://github.com" />
          </Col>
          <Col>
            <Whatsapp link="https://github.com" />
          </Col>
          <Col>
            <Twitter link="https://github.com" />
          </Col>
          <Col>
            <Facebook link="https://github.com" />
          </Col>
          <Col>
            <Tumblr link="https://github.com" />
          </Col>
          <Col>
            <Pinterest link="https://github.com" />
          </Col>
          <Col>
            <Reddit link="https://github.com" />
          </Col>
          <Col>
            <Telegram link="https://github.com" />
          </Col>
          <Col>
            <VK link="https://github.com" />
          </Col>
          <Col>
            <HackerNews link="https://github.com" />
          </Col>
        </Row>
      </div>
    );
  }
}
export default Social;
