import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavgiationBar() {
  function openNav() {
    document.getElementById('mySidenav').style.width = '250px';
  }

  function closeNav() {
    document.getElementById('mySidenav').style.width = '0';
  }

  return (
    <div>
      <Container fluid>
        <Row className="main_nav_cont">
          <Col sm={4} xs={2}>
            <div>
              <i
                onClick={openNav}
                className="fa fa-bars"
                aria-hidden="true"
              ></i>
            </div>
          </Col>
          <Col sm={4} xs={8}>
            <Image src="/images/LOGO.png" className="logo" />
          </Col>
          <Col sm={4} xs={2}>
            <div className="seach">
              <i className="fa fa-search seachi" aria-hidden="true"></i>
            </div>
          </Col>
        </Row>
        <div id="mySidenav" className="sidenav">
          <Link to="" className="closebtn" onClick={closeNav}>
            &times;
          </Link>

          <Link to="/" onClick={closeNav}>
            Home
          </Link>
          <Link to="/our-company" onClick={closeNav}>
            Our Company
          </Link>

          <div className="drop_dwn">
            <Link to="/our-company" onClick={closeNav}>
              About us
            </Link>

            <Link to="/our-mission" onClick={closeNav}>
              Our mission
            </Link>

            <Link to="/our-mission" onClick={closeNav}>
              Our mission
            </Link>

            <Link to="/our-history" onClick={closeNav}>
              Our History
            </Link>

            <Link to="/our-company" onClick={closeNav}>
              Our Leadership
            </Link>
          </div>

          <Link to="/careers" onClick={closeNav}>
            Careers
          </Link>
          <Link to="/" onClick={closeNav}>
            Logout
          </Link>
        </div>
      </Container>
    </div>
  );
}

export default NavgiationBar;
