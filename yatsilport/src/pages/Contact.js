import React, { useRef, useState } from "react";
import "./Contact.css";
import { Button, Typography } from "@mui/material";
import Form from "react-bootstrap/Form";
import Mail from "../utils/Mail";
import { Alert } from "@mui/material";

import emailjs from "@emailjs/browser";
const Contact = () => {
  const [alert, setalert] = useState("");
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        Mail.email.service,
        Mail.email.template,
        form.current,
        Mail.email.key
      )
      .then(
        (result) => {
          console.log(result.text);
          setalert(
            <Alert variant="outlined" severity="error">
              This is an error alert — check it out!
            </Alert>
          );
        },
        (error) => {
          console.log(error.text);

          setalert(
            <Alert variant="outlined" severity="error">
              This is an error alert — check it out!
            </Alert>
          );
        }
      );
  };

  return (
    <div className="div_contact">
      <div>
        <div className="mail_into">
          {alert}
          <h6>Feel free to contact me.</h6>
        </div>
        <Form ref={form} onSubmit={sendEmail}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Your full name</Form.Label>
            <Form.Control name="user_name" placeholder="My Name" />
            <Form.Label>Your email address</Form.Label>
            <Form.Control
              type="email"
              name="user_email"
              placeholder="name@example.com"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Message</Form.Label>
            <Form.Control
              name="message"
              placeholder="Hi..."
              as="textarea"
              rows={5}
            />
          </Form.Group>
          <Button className="mybutton" type="submit">
            Send
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Contact;
