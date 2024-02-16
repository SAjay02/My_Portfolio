import React from 'react'
import {Element}from "react-scroll"
import Skilling from "../../assets/Skill_Image.avif"
import LinearProgress from "@material-ui/core/LinearProgress"
import "./SkillContainer.css"
const SkillContainer = () => {
  return (
    <Element className="skillContainer" id="skills">
        <div className="skillContainer__image">
        <img src={Skilling}/>
        </div>
        <div className="skillContainer__text">
       <h2 >SKILLSET</h2>
        <div className="skillContainer__skillSet">
            <h5>Java</h5>
            <div className="skillContainer__slider skillContainer__slider1">
                <LinearProgress variant="determinate" value={75}/>
            </div>
        </div>
        <div className="skillContainer__skillSet">
            <h5>React JS</h5>
            <div className="skillContainer__slider skillContainer__slider2">
                <LinearProgress variant="determinate" value={40}/>
            </div>
        </div>
        <div className="skillContainer__skillSet">
            <h5>Node JS and Express JS</h5>
            <div className="skillContainer__slider skillContainer__slider3">
                <LinearProgress variant="determinate" value={25}/>
            </div>
        </div>
        <div className="skillContainer__skillSet">
            <h5>Mongo DB and MySQL</h5>
            <div className="skillContainer__slider skillContainer__slider4">
                <LinearProgress variant="determinate" value={50}/>
            </div>
        </div>
        <div className="skillContainer__skillSet">
            <h5>Firebase</h5>
            <div className="skillContainer__slider skillContainer__slider5">
                <LinearProgress variant="determinate" value={45}/>
            </div>
        </div>
        <div className="skillContainer__skillSet">
            <h5>Swing and AWT</h5>
            <div className="skillContainer__slider skillContainer__slider6">
                <LinearProgress variant="determinate" value={75}/>
            </div>
        </div>
        </div>
    </Element>
  )
}

export default SkillContainer