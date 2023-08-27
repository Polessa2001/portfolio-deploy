import React, { useRef } from 'react';
import * as Yup from 'yup'; // Import Yup for validation
import { useFormik } from 'formik'; // Import Formik for form management
import Button from '../button/Button';
import './Form.scss';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Form = () => {
  const notify = (text) => toast(text);
  const form = useRef();

  // Define Yup validation schema
  const validationSchema = Yup.object().shape({
    user_name: Yup.string().required('Name is required'),
    user_email: Yup.string().email('Invalid email').required('Email is required'),
    message: Yup.string().required('Message is required'),
  });

  const formik = useFormik({
    initialValues: {
      user_name: '',
      user_email: '',
      message: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      sendEmail(values);
    },
  });

  const sendEmail = (values) => {
    emailjs.sendForm('service_akbv4fk', 'template_wro0dwt', form.current, 'jKZY1uQt3vUNxoL0Z')
      .then((result) => {
        notify("Polina received your message!");
        console.log(result.text);
        formik.resetForm();
      })
      .catch((error) => {
        notify("Something went wrong...");
        console.log(error.text);
      });
  };

  return (
    <div className="formWrapper">
      <form ref={form} className="sectionForm" onSubmit={formik.handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="user_name"
          value={formik.values.user_name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.user_name && formik.errors.user_name ? (
          <div className="error">{formik.errors.user_name}</div>
        ) : null}

        <label>Email</label>
        <input
          type="email"
          name="user_email"
          value={formik.values.user_email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.user_email && formik.errors.user_email ? (
          <div className="error">{formik.errors.user_email}</div>
        ) : null}
        <textarea
          name="message"
          rows="5"
          cols="20"
          value={formik.values.message}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.message && formik.errors.message ? (
          <div className="error">{formik.errors.message}</div>
        ) : null}

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
