import React from 'react'
import pro1 from "../../assets/Project1_Img.png"
import pro2 from "../../assets/Project2_Imng.png"
import Projects from '../Projects/Projects'
import { Element } from 'react-scroll'
import "./ProjectContainer.css"
import {motion} from "framer-motion"
const ProjectContainer = () => {
    const projects=[
        {
            img:"https://www.mariokandut.com/static/a37a4931f2b57fcfef60398a1476456e/f2fb1/react-logo.webp",
            title:"E-COMMERCE LAPTOP STORE",
            desc:" Handling all details about the whole product of the laptops. Encryption to all the users with an authentication using JWT authorizations. And integrated the STRIPE payment gateway to ensure the users to pay. To monitoring the details of the users in the admin dashboard.",
            link:"https://lappistore.netlify.app/"
        },
        {
            img:pro1,
            title:"MEDICAL BILLING SYSTEM",
            desc:"Handling all details about the whole product of the medicines. Build for admin side purpose with an authentications. It also make a Bill receipt for the customers.",
            link:"https://bitfusion-715cb.web.app"
        },
        {
            img:pro1,
            title:"SMART GARBAGE DISPOSAL",
            desc:"Detect the level of the garbage container by using the sensor. It will displaythe levels in the maps at accurate location with different indications. Also have the authentications with consent admin and to enroute with shortest distance",
            link:"https://bitfusion-715cb.web.app"
        },
        {
            img:pro2,
            title:"FOOD-ORDER APPLICATION",
            desc:"It is user-friendly with customer to order the foods and making an payment with the authentications.",
            link:"https://github.com/SAjay02/Food_Order_Project"
        },
        {
            img:pro2,
            title:"FEEDBACK MANAGEMENT SYSTEM",
            desc:"Permit for every students to give their overall feedback regarding their subjects to the handled faculty.",
            link:"https://github.com/SAjay02/Feedback_Project"
        }
    ]
  
  return (
          <Element className="projectContainer" id="projects"> 
                <h1 className=" text-center" style={{color:"#f7c86a"}}>Projects</h1>
                <p className="project_sec_cont">Here are some projects which I have developed for my passions and other activites for past 10 months.</p>
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