import React from 'react';
import { Card, Col, Container, Image, Row } from 'react-bootstrap';

function OurHistory() {
  return (
    <div>
      <Container>
        <Card className="mission_card">
          <Row>
            <Col md={6}>
              <Image
                src="/images/ABOUT US IMAGES-03.png"
                className="about_img"
              />
            </Col>

            <Col md={6} className="mission">
              <div>
                <h1>Our history</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui ocia deserunt mollit
                  anim id est laborum.
                </p>
              </div>

              <div className="about_btn_container">
                <button className="btn btn-about-us">See more</button>
                <i
                  class="fa fa-arrow-right btn-about-us"
                  aria-hidden="true"
                ></i>
              </div>
            </Col>
          </Row>

          <Row>
            <Col md={8} className="mission">
              <div style={{ paddingTop: '70px' }}>
                <h1>Our Leadership</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui ocia deserunt mollit
                  anim id est laborum.
                </p>
              </div>

              <div className="about_btn_container">
                <button className="btn btn-about-us">See more</button>
                <i
                  class="fa fa-arrow-right btn-about-us"
                  aria-hidden="true"
                ></i>
              </div>
            </Col>
          </Row>
        </Card>
      </Container>
    </div>
  );
}

export default OurHistory;
