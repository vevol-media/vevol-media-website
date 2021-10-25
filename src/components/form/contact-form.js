import React from "react";
import { Title } from "bloomer";
import "./contact-form.scss";

const ContactForm = () => {
    return (
        <>
            <form className="form form--style">
                <Title className="form__title"> Get in touch.</Title>
                <div className="form__row">
                    <label htmlFor="name">Your Name</label>
                    <input type="text" name="name" id="name"></input>
                </div>
                <div className="form__row">
                    <label htmlFor="email">Your Email</label>
                    <input type="email" name="email" id="email"></input>
                </div>
                <div className="form__row">
                    <label htmlFor="phone">Your Phone</label>
                    <input type="number" name="phone" id="phone"></input>
                </div>
                <div className="form__row">
                    <label htmlFor="message">Your message</label>
                    <textarea name="message" id="message"></textarea>
                </div>
                <button
                    type="submit"
                    className="vm-button vm-button--transparent-white vm-button--full-width "
                >
                    Submit
                </button>
            </form>
        </>
    );
};

export default ContactForm;
