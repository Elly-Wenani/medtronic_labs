import React from 'react';
import { Helmet } from 'react-helmet-async';
import AboutUs from '../components/AboutUs';
import MissionVision from '../components/MissionVision';
import OurHistory from '../components/OurHistory';

function OurCompany() {
  return (
    <div style={{ paddingTop: '60px' }}>
      <Helmet title="Our Company | Meditronics Lab" />

      <div>
        <AboutUs />
      </div>
      <div style={{ padding: '40px 0' }}>
        <MissionVision />
      </div>
      <div style={{ padding: '40px 0' }}>
        <OurHistory />
      </div>
    </div>
  );
}

export default OurCompany;
