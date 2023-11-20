import React from 'react'
import { Element } from 'react-scroll'
import {IconButton} from "@material-ui/core"
import {Facebook, Instagram,LinkedIn} from "@material-ui/icons"
import "./Contact.css"

const Contact = () => {
  return (
    <Element className="contact" id="contact">
        <h1>Contact</h1>
        <div className="contact__container">
            <p>Email : <span>56510.ajay@gmail.com</span></p>
            <p>Phone Number: <span>9600399818</span></p>
            <p>Github UserName : <span>@SAjay02</span>
            </p>
            <div className="contact__icons">
                <a href="https://www.linkedin.com/in/ajay-s-18a7b5245/
"><IconButton><LinkedIn/></IconButton>
</a>
                <a href="https://www.instagram.com/sein_ajay_04"><IconButton><Instagram/></IconButton></a>
            </div>
        </div>
    </Element>
  )
}

export default Contact