import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import LandingAnnouncements from '../components/LandingAnnouncements';
import LandingBriefs from '../components/LandingBriefs';
import LandingImageSlide from '../components/LandingImageSlide';

function HomeScreen() {
  return (
    <div style={{ paddingTop: '60px' }}>
      <Helmet title="Home | Meditronics Lab" />
      <Container fluid>
        <Row>
          <Col md={6}>
            <div style={{ padding: '30px 0' }}>
              <LandingImageSlide />
            </div>
          </Col>
          <Col md={3}>
            <div style={{ padding: '30px 0' }}>
              <LandingBriefs />
            </div>
          </Col>
          <Col md={3}>
            <div style={{ padding: '30px 0' }}>
              <LandingAnnouncements />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HomeScreen;
