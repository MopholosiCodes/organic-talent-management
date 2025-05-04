import React from "react"
import { contact, address, copywrite, addressTitle } from "../data/footer";
import "../styles/Footer.scss";

export const Footer = () => {
    return (
        <div className="footer-container">
            <section className="footer-container__contact-section">
                <a href='/' className="header-container__logo">
                    <img src="/logo.png" alt="logo" />
                </a>
                <div className="contact-section__address">
                    <section className="address__header">{addressTitle}</section>
                    <section className="address__details">
                        <p className="address__details__company">{address.companyName}</p>
                        <p className="address__details__mail">{address.mail}</p>
                        <p className="address__details__address">{address.address}</p>
                    </section>
                </div>
                {contact.map(add => 
                    <div key={add.id} className="contact">
                        <p className="contact__title">{add.title}</p>
                        <p className="contact__contact">{add.contact}</p>
                    </div> 
                )}
            </section>
            <section className="footer-container__social-strip">
                <p className="copywrite-text">{copywrite}</p>
                <p className="social-icons">social icons</p>
            </section>
        </div>
    )
};