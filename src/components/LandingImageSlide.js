import Carousel from 'react-bootstrap/Carousel';
import React from 'react';

function LandingImageSlide() {
  return (
    <div className="landing_img_container">
      <Carousel className="my_carousel" controls={false}>
        <Carousel.Item interval={10000}>
          <div className="my_carousel_b">
            <div style={{ paddingBottom: '20px' }}>
              <a className="featured_link" href="/">
                Featured Article
              </a>
            </div>

            <div>
              <div>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat.
                </p>
              </div>
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item interval={10000}>
          <div className="my_carousel_b">
            <div style={{ paddingBottom: '20px' }}>
              <a className="featured_link" href="/">
                Featured Article
              </a>
            </div>

            <div>
              <div>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat.
                </p>
              </div>
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item interval={10000}>
          <div className="my_carousel_b">
            <div style={{ paddingBottom: '20px' }}>
              <a className="featured_link" href="/">
                Featured Article
              </a>
            </div>

            <div>
              <div>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat.
                </p>
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default LandingImageSlide;
