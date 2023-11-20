import React from 'react'
import { Link } from 'react-scroll'
import "./TopContent.css"
import Ajay from "../../assets/Ajay_New_Resume.pdf"
const TopContent = () => {
  return (
    <div className="topContent">
        <div className="topContent__container">
            <h1>Ajay S</h1>
            <p>Proficient in Java and Web Development</p>
            <a href="Ajay_New_Resume.pdf" download="Ajay-Resume.pdf"><button className="topContent__downloadButton">Download CV</button></a>
            <Link to="projects" smooth={true} duration={500}>
                <button className="topContent__workButton">My Work</button>
            </Link>
        </div>
        
    </div>
  )
}
export default TopContent