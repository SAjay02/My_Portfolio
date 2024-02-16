import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll'
import "./TopContent.css"
import Ajay from "../../assets/Ajay_New_Resume.pdf"
import img from "../../assets/Ajay_Prof.jpg"
const TopContent = () => {
  const [typedName, setTypedName] = useState('');
  const name = 'PROFICIENT IN JAVA AND MERN STACK DEVELOPER!';
  const typingSpeed = 460;

  useEffect(() => {
      let currentIndex = 0;

      const interval = setInterval(() => {
          setTypedName((prevTypedName) => {
              currentIndex = (currentIndex + 1) % name.length;
              return name.substring(0, currentIndex + 1);
          });
      }, typingSpeed);

      return () => clearInterval(interval);
  }, [name, typingSpeed]);
  
  return (
    <div className="topContent">
        <div className="img_top_container">
          <img src={img} className="img_container"/>
        </div>
        <div className="topContent__container">
            <h1>Hello, I am </h1>
            <h2>Ajay S</h2>
            <div  className="animate_cont_me">
            <p>I am&nbsp;</p>
            <p style={{color:"#f64c08"}}>{typedName}</p>
            </div>
            <p className="content_me">A highly self-motivated and dependable person who is great at time management. Meanwhile always energetic and eager to learn something a new skills for further projects. I am flexible others during projects and any other works.</p>
            <a href="Updated_Resume_Ajay.pdf" download="Ajay-Resume.pdf"><button className="topContent__downloadButton">Download CV</button></a>
            <Link to="projects" smooth={true} duration={500}>
                <button className="topContent__workButton">My Work</button>
            </Link>
        </div>
        
    </div>
  )
}
export default TopContent