import TechSkillsData from '../../data/TechSkillsData';
import SoftSkillsData from '../../data/SoftSkillsData';
import { useState } from 'react';
import './SectionThree.scss';
import { lightGreen } from '../../styles/colors';

const SectionThree = () => {
  const [isToggled, setIsToggled] = useState(false);
  const handleCheckboxChange = () => {
    setIsToggled(!isToggled);
  }

  const data = isToggled ? SoftSkillsData : TechSkillsData;
  const backColor = isToggled? lightGreen : "#ffffff";
  return (
    <div className="section-3-back" style={{backgroundColor: backColor}}>
        <div className="section-3-content">
          <h2>{!isToggled ? 'Technical Skills' : 'Soft Skills'}</h2>
          <div className="switchContainer">
            <p>Switch ➙</p>
            <label className="switch">
               <input type="checkbox" checked={isToggled} onChange={handleCheckboxChange}/>
               <span className="slider round"></span>
            </label>
          </div>
          <div className="skills">
            {data.map((skill) => (
              <div className="skill" style={{ backgroundColor: skill.color }} key ={skill.name}>
                <h4>{skill.title}</h4>
                <p>{skill.content}</p>
                <img src = {skill.icon} alt=""/>
              </div>
            ))}
          </div>
        </div>
      </div>
  )
};
export default SectionThree;
