import React from 'react';
import { Card } from 'react-bootstrap';

function LandingAnnouncements() {
  return (
    <div>
      <Card>
        <Card.Header className="announcement_card_head">
          <div className="announcement_card_head_content d-flex ">
            <div>
              <i className="fa fa-bullhorn" aria-hidden="true"></i>
            </div>
            <div className="announce">
              <h6>ANNOUNCEMENTS</h6>
              <p>16th July 2022</p>
            </div>
          </div>
        </Card.Header>
        <Card.Body className="announcement_card_body">
          <Card.Text>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper
          </Card.Text>
          <Card.Link
            href="#"
            className="anouncement_card_link d-flex justify-content-end"
          >
            <i className="fa fa-arrow-right" aria-hidden="true"></i>
          </Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default LandingAnnouncements;
