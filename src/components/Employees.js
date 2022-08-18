import React from 'react';
import { Card, Col, Image, Row } from 'react-bootstrap';

function Employees() {
  return (
    <div>
      <Row className="employees">
        <Col>
          <h6>200 TOTAL EMLOYEES </h6>
          <p>NEW EMLOYEES</p>
        </Col>
      </Row>

      <Row>
        <Col sm={12} xs={12}>
          <Card className="employee_card">
            <Card.Body className="card_briefs employee_content">
              <Card.Title>
                <Image
                  src="/images/shutterstock_274800230.jpg"
                  className="employee_image"
                />
              </Card.Title>
              <Card.Text className="employee_name">
                <p>Jame Mwangi</p>
                <div className="employee_title">
                  <p>IT</p>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={12} xs={12}>
          <Card className="employee_card">
            <Card.Body className="card_briefs employee_content">
              <Card.Title>
                <Image
                  src="/images/shutterstock_1361068562.jpg"
                  className="employee_image"
                />
              </Card.Title>
              <Card.Text className="employee_name">
                <p>Anne Wangui</p>
                <div className="employee_title">
                  <p>Communications</p>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col sm={4} xs={4}></Col>
        <Col sm={4} xs={4}></Col>
        <Col sm={4} xs={4}>
          <button className="btn btn_news btn_employee">View all</button>
        </Col>
      </Row>
    </div>
  );
}

export default Employees;
