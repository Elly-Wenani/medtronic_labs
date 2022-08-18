import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

function QuickLinks() {
  return (
    <div>
      <Card>
        <Card.Header className="quicklinks_card_head">
          <div className="quicklinks_card_head_content d-flex ">
            <div>
              <i className="fa fa-link" aria-hidden="true"></i>
            </div>
            <div className="announce">
              <h6>QUICK LINKS</h6>
            </div>
          </div>
        </Card.Header>
        <Card.Body className="quicklinks_card_body">
          <Row>
            <Col sm={4} xs={4} className="quick_row">
              <div className="quick_item_link bg1">
                <i className="fa fa-table" aria-hidden="true"></i>
              </div>
              <p>Forms</p>
            </Col>

            <Col sm={4} xs={4} className="quick_row">
              <div className="quick_item_link bg2">
                <i className="fa fa-file-excel" aria-hidden="true"></i>
              </div>
              <p>Reporting</p>
            </Col>

            <Col sm={4} xs={4} className="quick_row">
              <div className="quick_item_link bg3">
                <i className="fa fa-folder-open" aria-hidden="true"></i>
              </div>
              <p>Document libarry</p>
            </Col>

            <Col sm={4} xs={4} className="quick_row">
              <div className="quick_item_link bg4">
                <i className="fa fa-desktop" aria-hidden="true"></i>
              </div>
              <p>IT Services</p>
            </Col>

            <Col sm={4} xs={4} className="quick_row">
              <div className="quick_item_link bg5">
                <i className="fa fa-phone-square" aria-hidden="true"></i>
              </div>
              <p>Help Desk</p>
            </Col>

            <Col sm={4} xs={4} className="quick_row">
              <div className="quick_item_link bg6">
                <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
}

export default QuickLinks;
