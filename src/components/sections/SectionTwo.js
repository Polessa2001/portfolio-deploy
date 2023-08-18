import React, { useState } from 'react';
import { yellow, lightGreen } from '../../styles/colors';
import AboutMeCardsData from '../../data/AboutMeCardsData';
import './SectionTwo.scss';
import { useSpring, animated } from '@react-spring/web';

const SectionTwo = () => {
  const [show, setShow] = useState(false);
  const [hoveredBlockId, setHoveredBlockId] = useState(null);
  const styles = useSpring({
    reset: true,
    from: { opacity: '0' },
    to: { opacity: '1' },
    config: { duration: '1500' },
  });
  const handleBlockHover = (id) => {
    setHoveredBlockId(id);
    setShow(!show);
  };
  const hoveredContent = AboutMeCardsData.find(data => data.id === hoveredBlockId);

  return (
    <div className="section-2-content">
      <h2>About me</h2>
      <div className="section-2-content-grid">
       <div className="section-2-left">
          <animated.div style={styles}>
            <p>
              {hoveredContent && hoveredContent.content}
            </p>
          </animated.div>
        </div>
          <div className="blocks">
            <div
              className='block'
              style={{ backgroundColor: yellow }}
              onMouseOver={() => handleBlockHover(1)}
              onMouseOut={() => handleBlockHover(null)}
            >{"<>"}</div>
            <div
              className='block'
              style={{ backgroundColor: lightGreen }}
              onMouseOver={() => handleBlockHover(2)}
              onMouseOut={() => handleBlockHover(null)}
            >{"<...>"}</div>
            <div
              className='block'
              style={{ backgroundColor: "#000000", color: "#FFFFFF"}}
              onMouseEnter={() => handleBlockHover(3)}
              onMouseOut={() => handleBlockHover(null)}
            >{"</>"}</div>
        </div>
        <div className="wrapperForImage">
          {hoveredContent && (
             <animated.div style={styles}><img src={hoveredContent.img} alt="About Me"/> </animated.div>
          )}
        </div>
      </div>

    </div>
  );
};

export default SectionTwo;
