import React from 'react'
import {Element}from "react-scroll"
import Skilling from "../../assets/Skill_Image.avif"
import LinearProgress from "@material-ui/core/LinearProgress"
import "./SkillContainer.css"
import {motion} from "framer-motion"
import transitions, { duration } from '@material-ui/core/styles/transitions'

const animate_side_img={
    offscreen:{
        x:200,
        opacity:0
    },
    onscreen:{
        x:0,
        opacity:1,
        transitions:{
            type:"spring",
            duration:3
        }
    }
}

const animate_progress={
    offscreen:{
        x:-200,
        opacity:0
    },
    onscreen:{
        x:0,
        opacity:1,
        transitions:{
            type:"spring",
            duration:3
        }
    }
}
const SkillContainer = () => {
  return (
    <motion.div initial="offscreen" whileInView="onscreen">
    <Element className="skillContainer" id="skills" >
        <div className="skillContainer__image">
        <motion.img variants={animate_side_img} src={Skilling}/>
        </div>
        <div className="skillContainer__text">
       <h2 >SKILLSET</h2>
        <motion.div className="skillContainer__skillSet" variants={animate_progress}>
            <h5>Java</h5>
            <div className="skillContainer__slider skillContainer__slider1">
                <LinearProgress variant="determinate" value={75}/>
            </div>
        </motion.div>
        <motion.div className="skillContainer__skillSet" variants={animate_progress}>
            <h5>React JS</h5>
            <div className="skillContainer__slider skillContainer__slider2">
                <LinearProgress variant="determinate" value={40}/>
            </div>
        </motion.div>
        <motion.div className="skillContainer__skillSet" variants={animate_progress}>
            <h5>Node JS and Express JS</h5>
            <div className="skillContainer__slider skillContainer__slider3">
                <LinearProgress variant="determinate" value={25}/>
            </div>
        </motion.div>
        <motion.div className="skillContainer__skillSet" variants={animate_progress}>
            <h5>Mongo DB and MySQL</h5>
            <div className="skillContainer__slider skillContainer__slider4">
                <LinearProgress variant="determinate" value={50}/>
            </div>
        </motion.div>
        <motion.div className="skillContainer__skillSet" variants={animate_progress}>
            <h5>Firebase</h5>
            <div className="skillContainer__slider skillContainer__slider5">
                <LinearProgress variant="determinate" value={45}/>
            </div>
        </motion.div>
        <motion.div className="skillContainer__skillSet" variants={animate_progress}>
            <h5>Swing and AWT</h5>
            <div className="skillContainer__slider skillContainer__slider6">
                <LinearProgress variant="determinate" value={75}/>
            </div>
        </motion.div>
        </div>
    </Element>
    </motion.div>
  )
}

export default SkillContainer