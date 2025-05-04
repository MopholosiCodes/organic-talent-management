import React from "react";
import "../styles/ContactForm.scss";

export const ContactForm = () => {
    return (
        <div className="form-container">
            <section className="form-container__names">
                <input type="text" name="" id="" placeholder="First name" />
                <input type="text" name="" id="" placeholder="Last name"/>
            </section>
            <input type="text" name="" id="" placeholder="Subject"/>
            <input type="text" name="" id="" placeholder="E-mail address"/>
            <input type="textarea" name="" id="" placeholder="Write your message"/>
            <section className="form-container__button">
                <button>SEND MESSAGE</button>
            </section>
        </div>
    )
}