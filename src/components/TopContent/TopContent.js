import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll'
import "./TopContent.css"
import Ajay from "../../assets/Ajay_New_Resume.pdf"
import img from "../../assets/Ajay_Prof.jpg"
import {motion, spring} from "framer-motion"
import ScrollButton from '../ScrollButton';
const TopContent = () => {
  const [typedName, setTypedName] = useState('');
  const name = 'PASSIONATE IN JAVA AND MERN STACK DEVELOPER!';
  
 const animateImg={
    offscreen:{
      y:-200,
      opacity:0
    },
    onscreen:{
      y:0,
      opacity:1,
      transition:{
        type:"spring",
        bounce:0.5,
        duration:2.5
      }
    }
 }

 const first_cont={
  offscreen:{
    x:800,
    opacity:0
  },
  onscreen:{
    x:0,
    opacity:1,
    transition:{
      type:"spring",
      duration:2.5
    }
  }
}

const second_cont={
  offscreen:{
    x:1400,
    opacity:0
  },
  onscreen:{
    x:0,
    opacity:1,
    transition:{
      type:"spring",
      duration:2.5
    }
  }
}

const third_cont={
  offscreen:{
    x:2000,
    opacity:0
  },
  onscreen:{
    x:0,
    opacity:1,
    transition:{
      type:"spring",
      duration:2.5
    }
  }
}

const btn_cont={
  offscreen:{
    x:2000,
    opacity:0
  },
  onscreen:{
    x:0,
    opacity:1,
    transition:{
      type:"spring",
      duration:3
    }
  }
}
  
  return (
    <motion.div className="topContent" initial="offscreen" whileInView="onscreen">
        <div className="img_top_container">
          <motion.img variants={animateImg} src={img} className="img_container"/>
        </div>
        <div className="topContent__container">
            <motion.h1 variants={first_cont}>Hello, I am </motion.h1>
            <motion.h2 variants={second_cont}>Ajay S</motion.h2>
            <div  className="animate_cont_me">
            <motion.p variants={third_cont}>I am&nbsp;</motion.p>
            <motion.p variants={third_cont} style={{color:"#f64c08"}}>{name}</motion.p>
            </div>
            <p className="content_me">A highly self-motivated and dependable person who is great at time management. Meanwhile always energetic and eager to learn something a new skills for further projects. I am flexible others during projects and any other works.</p>
            <motion.a href="717821E202_Ajay S.pdf" download="Ajay-Resume.pdf"><button className="topContent__downloadButton" >Download CV</button></motion.a>
            <Link to="projects" smooth={true} duration={500}>
                <button className="topContent__workButton">My Work</button>
            </Link>
        </div>
        
    </motion.div>

  )
}
export default TopContent