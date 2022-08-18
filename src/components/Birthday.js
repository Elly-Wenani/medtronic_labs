import React from 'react';
import { Card, Image } from 'react-bootstrap';

function Birthday() {
  return (
    <div>
      <Card className="birthday_card">
        <Card.Body className="birthday_content">
          <Card.Title className="birthday_card_titles">
            <h3>Happy</h3>
            <span className="birthday_title">Birthday</span>
          </Card.Title>
          <Card.Title className="b_img_container">
            <Image
              src="/images/shutterstock_1361068562.jpg"
              className="birthday_image"
            />
          </Card.Title>

          <Card.Text className="birthday_name">
            <h3>Betty Athiambo</h3>
            <div className="birthday_date">
              <p>15 July 2020</p>
            </div>
          </Card.Text>
        </Card.Body>

        <div style={{ padding: '15px' }}>
          <div className="birth_title_txt">
            <h6>Upcoming Birthday</h6>
          </div>
          <Card.Body>
            <div className="next_birthday">
              <Card.Title>
                <Image src="/images/man.jpg" className="employee_image" />
              </Card.Title>
              <Card.Text className="employee_name">
                <p>Seth Smith</p>
                <div className="employee_title">
                  <p>25 July 2020</p>
                </div>
              </Card.Text>
            </div>
          </Card.Body>
        </div>
      </Card>
    </div>
  );
}

export default Birthday;
