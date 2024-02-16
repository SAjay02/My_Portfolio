import React from 'react'
import { Element } from 'react-scroll'
import {IconButton} from "@material-ui/core"
import {Facebook, Instagram,LinkedIn} from "@material-ui/icons"
import "./Contact.css"
import leetcode from "../../assets/leetcode.ico"
import github from "../../assets/github.ico"
import linkedin from "../../assets/linkedin.ico"
import insta from "../../assets/instagram.ico"
const Contact = () => {
  return (
    <Element className="contact" id="contact">
        <h1>Contact</h1>
        <div className="contact__container">
            <p>Email : <span>56510.ajay@gmail.com</span></p>
            <p>Phone Number: <span>9600399818</span></p>
            {/* <p>Github UserName : <span>SAjay02</span></p> */}
            <div className="contact__icons">
                <a href="https://www.linkedin.com/in/ajay-s-18a7b5245/"><img src={linkedin}/></a>
                <a href="https://www.instagram.com/sein_ajay_04"><img src={insta}/></a>
                <a href="https://leetcode.com/SAjay02/"><img src={leetcode}/></a>
                <a href="https://github.com/SAjay02"><img src={github}/></a>
            </div>
        </div>
    </Element>
  )
}
export default Contact