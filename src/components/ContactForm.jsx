import React from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import emailjs from 'emailjs-com';
import "../styles/ContactForm.scss";

export const ContactForm = () => (
    <Formik
        initialValues={{ 
            firstName: '', 
            lastName: '', 
            subject: '', 
            email: '', 
            message: '',  
        }}
        validationSchema={Yup.object({
            firstName: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('Required'),
            lastName: Yup.string()
                .max(20, 'Must be 20 characters or less')
                .required('Required'),
            email: Yup.string()
                .email('Invalid email address')
                .required('Required'),
            subject: Yup.string().required('Required'),
            message: Yup.string().required('Required'),
        })}
        onSubmit={(values, { setSubmitting, resetForm }) => {
            emailjs.send(
                'service_orz2erw',
                'template_cz9xor8',
                values,
                'oxOtthLIbd8zmDl0K'
            ).then(() => {
                resetForm();
                window.location.reload();
            }).catch((error) => {
                console.error('Email send error:', error);
                alert('Something went wrong. Try again later.');
            }).finally(() => {
                setSubmitting(false);
            });
        }}
    >
        {({ isSubmitting }) => (
            <Form className="form-container">
                <section className="form-container__names">
                    <div className="form-field-group">
                        <Field type="text" name="firstName" placeholder="First name" />
                        <ErrorMessage name="firstName" component="div" className="error" />
                    </div>
                    <div className="form-field-group">
                        <Field type="text" name="lastName" placeholder="Last name" />
                        <ErrorMessage name="lastName" component="div" className="error" />
                    </div>
                </section>
                <div className="form-field-group">
                    <Field type="email" name="email" placeholder="E-mail address" />
                    <ErrorMessage name="email" component="div" className="error" />
                </div>
                <div className="form-field-group">
                    <Field type="text" name="subject" placeholder="Subject"/>
                    <ErrorMessage name="subject" component="div" className="error" />
                </div>
                <div className="form-field-group">
                    <Field as="textarea" name="message" placeholder="Message" rows="10"/>
                    <ErrorMessage name="message" component="div" className="error" />
                </div>
                <section className="form-container__button">
                    <button type="submit" disabled={isSubmitting}>SEND MESSAGE</button>
                </section>
            </Form>
        )}
    </Formik>
);
