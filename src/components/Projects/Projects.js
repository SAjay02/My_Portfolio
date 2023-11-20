import React, { useState } from 'react'
import "./Projects.css"
const Projects = ({img,title,desc,link}) => {
    const [show,setShow]=useState(false);
  return (
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
  )
}

export default Projects