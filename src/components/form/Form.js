import React, { useRef } from 'react';
import Button from '../button/Button';
import './Form.scss';
import emailjs from '@emailjs/browser';

const Form = () => {
  const form = React.useRef(null);

  const sendEmail = (e) => {
    e.preventDefault(); // Prevent the default form submission
    // Your Email.js code to send the email

    // For demonstration purposes, I'm using a fake success message
  };

  return (
    <div className="formWrapper">
      <form ref={form} className="sectionForm" onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <textarea name="message" rows="5" cols="20" />
        <Button name="Send" backgroundColor="#FFFFFF" type="submit">
          Send
        </Button>
      </form>
    </div>
  );
};
export default Form;
