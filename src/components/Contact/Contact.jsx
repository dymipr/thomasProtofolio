import React from "react";

import "../Contact/Contact.css";

function Contact() {
  return (
    <>
      <div className="contact"></div>
      <section className="contact_container-general">
        <p className="contact_title">Contacto</p>

        <div className="red_container">
          <a href="https://github.com/ManuelDavGomez" target='_blank'className="social-icon github">
            <i className="bi bi-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/Manuel-David/" target='_blank' className="social-icon linkedin">
            <i className="bi bi-linkedin"></i>
          </a>
        </div>
      </section>

      <section className="form_container">
        <form
          action="https://formspree.io/f/xknanlae"
          method="POST"
          encType="multipart/form-data"
          id="form"
        >
          <input
            type="text"
            name="first"
            placeholder="First name"
            autoComplete="off"
            required
          />
          <input
            type="text"
            name="last"
            placeholder="Last name"
            autoComplete="off"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            autoComplete="off"
            required
          />
          <textarea
            name="message"
            cols="60"
            rows="5"
            placeholder="Enter Text"
            autoComplete="off"
            required
          ></textarea>
          <input type="submit" value="Send" className="contact_btn" />
        </form>
      </section>
    </>
  );
}

export default Contact;
