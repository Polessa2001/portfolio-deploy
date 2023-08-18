import React from 'react';
import './SectionFour.scss';
import ProjectCardData from '../../data/ProjectCardData';
import next from '../../assets/icons8-arrow-100.png';
import { yellow } from '../../styles/colors';


const SectionFour = () => {
  return (
    <div className="section-4-content">
      <h2>Projects</h2>
      <div className="projects">
        {ProjectCardData.map((projectCard) => {
          const commonStyle = {
            width: projectCard.width,
            height: projectCard.height,
            backgroundColor: projectCard.backgroundColor,
            gridColumnStart: projectCard.gcs,
            gridColumnEnd:  projectCard.gce,
            gridRowStart:  projectCard.grs,
            gridRowEnd:  projectCard.gre
          };

          const dynamicStyles = projectCard.name === 'WTT' ? {
            ...commonStyle,
            fontSize: '2rem',
            backgroundColor: 'black',
            color: yellow,
          } : {
            ...commonStyle,
            color: '#000000',
          };

          return (
            <div
              key={projectCard.id}
              className={"projectCard"}
              style={dynamicStyles}
            >
              <p
                style={{
                  transform:
                    projectCard.name === "WatchList"
                      ? "rotate(-30deg)"
                      : projectCard.name === "QuizGame"
                      ? "rotate(30deg)"
                      :
                      projectCard.name === "WTT"
                      ? 'rotate(270deg)' : "",
                      fontSize: projectCard.name === 'PlantAqua' ? '4.5rem' : '2rem',
                      textTransform: projectCard.name === 'PlantAqua' ? 'uppercase' : ''
                }}
              >
                {projectCard.name}
              </p>
              <a className="linkToProject" href={projectCard.link}><img src={next} alt="" className="nextLink"/></a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SectionFour;
