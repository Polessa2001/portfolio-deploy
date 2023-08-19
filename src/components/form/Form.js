import React, { useRef } from 'react';
import Button from '../button/Button';
import './Form.scss';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Form = () => {
  const form = useRef();
  const notify = (text) => toast(text);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_akbv4fk', 'template_wro0dwt', form.current, 'jKZY1uQt3vUNxoL0Z')
      .then((result) => {
        notify("Polina recieved your message!")
        console.log(result.text);
        form.current.reset(); // Clear form fields
      })
      .catch((error) => {
        notify("Something went wrong...")
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
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default Form;
