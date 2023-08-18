import React from 'react';
import SectionOne from '../sections/SectionOne';
import SectionTwo from '../sections/SectionTwo';
import SectionThree from '../sections/SectionThree';
// import SectionFour from '../sections/SectionFour';
// import SectionFive from '../sections/SectionFive';
import Navbar from '../navbar/Navbar';
import { lightGreen } from '../../styles/colors';
import './MainContent.scss';

const MainContent = () => {
  return (
    <div className="container">
      <Navbar />
      <section id="section-1">
        <SectionOne />
      </section>
      <section id="section-2">
        <SectionTwo />
      </section>
      <section id="section-3">
        <SectionThree />
      </section>
    </div>
  )
};

export default MainContent;
// <section id="section-4">
//   <SectionFour />
// </section>
// <section id="section-5"  style={{ backgroundColor: lightGreen }}>
//   <SectionFive />
// </section>
