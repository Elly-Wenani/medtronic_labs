import React from 'react';
import { Card, Col, Container, Image, Row } from 'react-bootstrap';

function MissionVision() {
  return (
    <div>
      <Container>
        <Card className="about_card">
          <Row>
            <Col md={6}>
              <Image
                src="/images/ABOUT US IMAGES-02.png"
                className="about_img"
              />
            </Col>

            <Col md={6} className="mission">
              <div>
                <h1>Our Mission</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis
                </p>
              </div>

              <div>
                <h1>Our vision</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis
                </p>
              </div>
            </Col>
          </Row>
        </Card>
      </Container>
    </div>
  );
}

export default MissionVision;
