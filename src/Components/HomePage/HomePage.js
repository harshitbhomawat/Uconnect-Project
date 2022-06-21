import React, { Component } from 'react';
import Navbar from './Sections/Navbar';
import Banner from './Sections/Banner';
import KnowAbout from './Sections/KnowAbout';
import AboutUs from './Sections/AboutUs';
import ContactUs from './Sections/ContactUs';

function HomePage() {
  return (
    <div>
      <Navbar />
      <Banner />
      <AboutUs />
      <KnowAbout />
      <ContactUs />
    </div>
  );
}

export default HomePage;
