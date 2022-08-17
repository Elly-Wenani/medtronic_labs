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
            <LandingImageSlide />
          </Col>
          <Col md={3}>
            <LandingBriefs />
          </Col>
          <Col md={3}>
            <LandingAnnouncements />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HomeScreen;
