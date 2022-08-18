import React from 'react';
import { Col, Row } from 'react-bootstrap';

function CompanyNews() {
  return (
    <div>
      <Row>
        <Col className="my_row">
          <div>
            <h6>
              <strong>COMPANY NEWS</strong>
            </h6>
          </div>

          <div>
            <h5 className="btn_news">View all</h5>
          </div>
        </Col>
      </Row>
      <Row style={{ paddingTop: '20px' }}>
        <Col className="the_news">
          <span>July 16, 2022 at 11:35 am</span>
          <h5>News Title</h5>

          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim
          </p>
          <hr />
        </Col>
      </Row>

      <Row style={{ paddingTop: '20px' }}>
        <Col className="the_news">
          <span>July 16, 2022 at 11:35 am</span>
          <h5>News Title</h5>

          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim
          </p>
          <hr />
        </Col>
      </Row>

      <Row style={{ paddingTop: '20px' }}>
        <Col className="the_news">
          <span>July 16, 2022 at 11:35 am</span>
          <h5>News Title</h5>

          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim
          </p>
        </Col>
      </Row>
    </div>
  );
}

export default CompanyNews;
