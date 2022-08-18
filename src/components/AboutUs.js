import React from 'react';
import { Card, Col, Container, Image, Row } from 'react-bootstrap';

function AboutUs() {
  return (
    <div>
      <Container>
        <Card className="about_card">
          <Row>
            <Col md={6}>
              <h1>About Us</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui ocia deserunt mollit anim id est laborum.
              </p>
            </Col>
            <Col md={6}>
              <Image
                src="/images/ABOUT US IMAGES-01.png"
                className="about_img"
              />
            </Col>
          </Row>
        </Card>
      </Container>
    </div>
  );
}

export default AboutUs;
