import React, { useState } from 'react'
import "./Projects.css"
import {delay, motion} from "framer-motion"
import { duration } from '@material-ui/core'

const project_animate={
  offscreen:{
      y:100
  },
  onscreen:{
      y:0,
      transition:{
        type:"spring",
        duration:2,
      }
  }
}

const Projects = ({img,title,desc,link}) => {
    const [show,setShow]=useState(false);
  return (
    <motion.div initial="offscreen" whileInView="onscreen" variants={project_animate}> 
    <a href={link} style={{textDecoration:"none",color:"white"}}>
    <div className="project" onMouseEnter={()=>setShow(true)} onMouseLeave={()=>setShow(false)}>
        {
            show?(
                   <div className="project__content">
                        <h4>{title}</h4>
                        <p>{desc}</p>
                   </div> 
            ):(
                <img src={img}/>
            )
        }
    </div>
    </a>
    </motion.div>
  )
}

export default Projects