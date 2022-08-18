import React from 'react';
import { Card, Col, Image, ProgressBar, Row } from 'react-bootstrap';

function LandingBriefs() {
  return (
    <div>
      <Card className="my_card">
        <Card.Body className="card_briefs">
          <Card.Title>
            <Image src="/images/man.jpg" className="brief_image" />
          </Card.Title>
          <Card.Text className="brief_content">
            <small>09:30 AM Wednesday, July 14 2022 </small>
            <p>Fantastic Morning Aron Chege</p>
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className="my_card_b">
        <Card.Body className="card_briefs_b">
          <Card.Title>
            <i className="fa fa-list brief_left_icon" aria-hidden="true"></i>
          </Card.Title>
          <div className="brief_content_tasks">
            <h6>My Tasks</h6>
            <small>Task done: 30/60</small>
          </div>
        </Card.Body>

        <Row className="card_briefs_bs">
          <Col xs={3}></Col>
          <Col xs={7} sm={7}>
            <ProgressBar now={50} />
          </Col>
          <Col xs={2}>
            <Card.Link href="#">
              <i
                className="fa fa-arrow-right brief_icon"
                aria-hidden="true"
              ></i>
            </Card.Link>
          </Col>
        </Row>
      </Card>

      <Card className="my_card_c">
        <Card.Body className="card_briefs_c">
          <Card.Title>
            <i
              className="fa fa-users brief_left_icon_team"
              aria-hidden="true"
            ></i>
          </Card.Title>
          <div className="brief_content_tasks_team">
            <h6>Connect with team</h6>
            <p>Communicate, share documents and work together on a project</p>
          </div>
        </Card.Body>

        <Row className="card_briefs_bss">
          <Col xs={3}></Col>
          <Col xs={7} sm={7}></Col>
          <Col xs={2}>
            <Card.Link href="#">
              <i
                className="fa fa-arrow-right brief_icon"
                aria-hidden="true"
              ></i>
            </Card.Link>
          </Col>
        </Row>
      </Card>
    </div>
  );
}

export default LandingBriefs;
