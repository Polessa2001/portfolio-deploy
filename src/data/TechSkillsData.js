import api from "../assets/techIcons/icons8-api-50.png";
import front from "../assets/techIcons/icons8-front-end-50.png";
import backend from "../assets/techIcons/icons8-backend-50.png";
import database from "../assets/techIcons/icons8-database-50.png";
import github from "../assets/techIcons/icons8-github-50.png";
import webdesign from "../assets/techIcons/icons8-web-design-50.png";
import { green, lightGreen, yellow, blue } from '../styles/colors';

const TechSkillsData = [
  {title: "<Front-end />",content: "Providing a seamless, functional, easy-to-navigate, and aesthetically pleasing UI/UX with technologies such as React, JavaScript, HTML, CSS, SASS, and Ruby on Rails.", icon: front, color: lightGreen},
  {title: "<Back-end />",content: "Build, maintain, and debug the technologies that power the functionality of the software or website, utilizing languages like Ruby, Python, and JavaScript.", icon: backend, color: lightGreen},
  {title: "<Version-control />",content: "Utilizing GitHub as an integral part of my development workflow, I effectively manage version control, collaboration, and project organization.", icon: github, color: yellow},
  {title: "<Database />",content: "Employing a diverse range of technologies including SQL, JSON, XML, and Redux-Store, I craft comprehensive and efficient solutions for various development challenges.", icon: database, color: yellow},
  {title: "<Api />",content: " Leveraging APIs to seamlessly integrate data and services into applications, enhancing their functionality and user experience.", icon: api, color: blue},
  {title: "<Styling />",content: "Creating an engaging and understandable design for the content using Bootstrap, Tailwind, and Figma", icon: webdesign, color: green}
];
export default TechSkillsData;
