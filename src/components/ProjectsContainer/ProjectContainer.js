import React from 'react'
import pro1 from "../../assets/Project1_Img.png"
import pro2 from "../../assets/Project2_Imng.png"
import Projects from '../Projects/Projects'
import { Element } from 'react-scroll'
import "./ProjectContainer.css"
const ProjectContainer = () => {

    const projects=[
        {
            img:pro1,
            title:"Smart Garbage Disposal",
            desc:"Detect the garbage can level by using sensor and track all details about it",
            link:"https://bitfusion-715cb.web.app"
        },
        {
            img:pro2,
            title:"Food-Order Application",
            desc:"It is user-friendly with customerto orderthe foods and making an payment with ordinary theme",
            link:"https://github.com/SAjay02/Food_Order_Project"
        },
        {
            img:pro2,
            title:"Feedback Management System",
            desc:"Permit a every students to give their overall feedback regarding their subjects to the handle faculty",
            link:"https://github.com/SAjay02/Feedback_Project"
        }
    ]
    
  return (
          <Element className="projectContainer" id="projects">
                <h1>Projects</h1>
                <p>Here are some projects which I have developed for my passions and other activites</p>
                <div className="projectContainer__projects">
                {
                    projects.map((project,index)=>
                    {
                        return(
                            <Projects key={index} img={project.img} title={project.title} desc={project.desc}
                            link={project.link}/>
                        )
                    })
                }
                </div>
          </Element>
  )
}

export default ProjectContainer