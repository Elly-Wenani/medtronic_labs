import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import Birthday from '../components/Birthday';
import CompanyNews from '../components/CompanyNews';
import Employees from '../components/Employees';
import LandingAnnouncements from '../components/LandingAnnouncements';
import LandingBriefs from '../components/LandingBriefs';
import LandingImageSlide from '../components/LandingImageSlide';
import QuickLinks from '../components/QuickLinks';
import UpcomingEvents from '../components/UpcomingEvents';

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
            <div className="company_news_container">
              <CompanyNews />
            </div>
          </Col>
          <Col md={3}>
            <div style={{ padding: '30px 0' }}>
              <LandingBriefs />
            </div>
            <div className="company_news_container">
              <UpcomingEvents />
            </div>

            <div className="company_news_container">
              <Employees />
            </div>
          </Col>
          <Col md={3}>
            <div style={{ padding: '30px 0' }}>
              <LandingAnnouncements />
            </div>
            <div style={{ marginBottom: '30px' }}>
              <QuickLinks />
            </div>

            <div style={{ marginBottom: '30px' }}>
              <Birthday />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HomeScreen;
