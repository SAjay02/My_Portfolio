import React from 'react'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from "react-hot-toast"
import emailjs from '@emailjs/browser';
const Join = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [viewer,setViewer]=useState(
        {
            name:"",
            email:"",
            message:""
        }
    )
    const handleChange=(e)=>
    {
        setViewer({
        ...viewer,
        [e.target.name]:e.target.value
        })
    }
  const handleSubmit=(event)=>
  {
    event.preventDefault();
    console.log(viewer)
    setViewer('');
    toast.success("Mail Sent Successfully");
    const serviceId = 'service_pezcy9z';
    const templateId = 'template_1bevlzm';
    const publicKey = '1UdyIvKr90_b45YSS';

    const object = {
        from_name:viewer.name,
        from_mail:viewer.email,
        to_name:'Ajay',
        message:viewer.message
   }

   //send mail to Myself
   emailjs.send(serviceId, templateId, object, publicKey)
   .then((result) => {
       console.log(result.text);
   }, (error) => {
       console.log(error.text);
   });
  }

  return (
    <>
    <Button variant="success" onClick={handleShow}>
    JOIN WITH ME
    </Button>
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Send Email</Modal.Title>
      </Modal.Header>
      <Modal.Body>

      <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" value={viewer.name} onChange={handleChange} name="name" required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={viewer.email} onChange={handleChange} name="email" required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Add Message</Form.Label>
        <Form.Control type="text" placeholder="Enter Message" value={viewer.message} onChange={handleChange} name="message" required/>
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleSubmit}>Submit</Button>
    </Form>

      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  </>
  )
}

export default Join