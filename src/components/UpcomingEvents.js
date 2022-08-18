import React from 'react';
import { Col, Row } from 'react-bootstrap';

function UpcomingEvents() {
  return (
    <div>
      <Row className="upcoming_news_container">
        <Col sm={3} xs={3}>
          <i className="fa fa-briefcase" aria-hidden="true"></i>
        </Col>
        <Col sm={9} xs={9}>
          <h6>UPCOMING EVENTS</h6>
        </Col>
      </Row>

      <Row className="upcoming_events_main_cont">
        <Col sm={3} xs={3}>
          <div className="upcoming_news_date">
            <h3>23</h3>
            <p>JUL 2022</p>
          </div>
        </Col>
        <Col sm={9} xs={9} className="upcoming_news_details">
          <div>
            <h6>Meetting at 9,00 AM with manager</h6>
            <button className="btn btn-pending">PENDING</button>
          </div>
        </Col>
        <hr />
      </Row>

      <Row className="upcoming_events_main_cont">
        <Col sm={3} xs={3}>
          <div className="upcoming_news_date">
            <h3>25</h3>
            <p>JUL 2022</p>
          </div>
        </Col>
        <Col sm={9} xs={9} className="upcoming_news_details">
          <div>
            <h6>MMarketing Stragety Solution Seminar</h6>
            <button className="btn btn-pending2">PENDING</button>
          </div>
        </Col>
        <hr />
      </Row>

      <Row className="upcoming_events_main_cont">
        <Col sm={3} xs={3}>
          <div className="upcoming_news_date">
            <h3>26</h3>
            <p>JUL 2022</p>
          </div>
        </Col>
        <Col sm={9} xs={9} className="upcoming_news_details">
          <div>
            <h6>JS Staff Annual Dinner 2022</h6>
            <button className="btn btn-pending3">PENDING</button>
          </div>
        </Col>
        <hr />
      </Row>

      <Row className="upcoming_events_main_cont">
        <Col sm={3} xs={3}>
          <div className="upcoming_news_date">
            <h3>28</h3>
            <p>JUL 2022</p>
          </div>
        </Col>
        <Col sm={9} xs={9} className="upcoming_news_details">
          <div>
            <h6>JS Program 2022 -2023</h6>
            <button className="btn btn-pending4">PENDING</button>
          </div>
        </Col>
      </Row>
      <Row>
        <Col sm={4} xs={4}></Col>
        <Col sm={4} xs={4}></Col>
        <Col sm={4} xs={4}>
          <button className="btn btn_news">View all</button>
        </Col>
      </Row>
    </div>
  );
}

export default UpcomingEvents;
