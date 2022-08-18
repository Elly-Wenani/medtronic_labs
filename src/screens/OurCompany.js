import React from 'react';
import { Helmet } from 'react-helmet-async';
import AboutUs from '../components/AboutUs';

function OurCompany() {
  return (
    <div style={{ paddingTop: '60px' }}>
      <Helmet title="Our Company | Meditronics Lab" />

      <div>
        <AboutUs />
      </div>
    </div>
  );
}

export default OurCompany;
