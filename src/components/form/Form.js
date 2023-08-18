import React, { useRef } from 'react';
import Button from '../button/Button';
import './Form.scss';
import emailjs from '@emailjs/browser';

const Form = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_akbv4fk', 'template_wro0dwt', form.current, 'jKZY1uQt3vUNxoL0Z')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
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
