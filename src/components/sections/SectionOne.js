import React from 'react';
import photome from '../../assets/photome.svg';
import { TypeAnimation } from 'react-type-animation';
import Button from '../button/Button';
import './SectionOne.scss';
import { lightGreen, green } from '../../styles/colors';
import CV from '../../assets/CV.pdf'
const SectionOne = () => {
  return(
  <>
    <img src = {photome} alt="myPhoto"/>
    <div className="section-1-content">
      <p>Hello, I'm</p>
      <h1>Polina Sokolova</h1>
      <p>Creative full-stack web developer
        <br></br>
        passionate about coding and
        <br></br>
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed out once, initially
            'technologies....',
            1000, // wait 1s before replacing "Mice" with "Hamsters"
            'sketching',
            1000,
            'reading',
            1000,
            'board games',
            1800
          ]}
          wrapper="span"
          speed={50}
          style={{ fontSize: '30px', display: 'inline-block', fontfamily: 'Open Sans, sans-serif' }}
          repeat={Infinity}
          className="animatedText"
        />
      </p>
      <div className="button-container">
        <a href={CV}><Button name="Download CV" backgroundColor={lightGreen} type="button"/></a>
        <a href = "#section-4"><Button name="View Portfolio" backgroundColor={green} type="button"/></a>
      </div>
    </div>
    </>
  )
};
export default SectionOne;
