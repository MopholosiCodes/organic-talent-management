import React from "react";
import { contactTitle } from "../data/contact";
import { ContactForm } from "../components/ContactForm";
import "../styles/Contact.scss"

export const Contact = () => {
    return (
      <div className="contact-container">
        <h1 className="contact-container__title">{contactTitle}</h1>
        <section className="contact-container__form">
          <ContactForm />
        </section>
      </div>
    )
  }