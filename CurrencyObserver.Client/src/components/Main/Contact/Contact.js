import React from 'react';
import ContactForm from './ContactForm';
import Recommendations from './Recommendations';

const Contact = () => {
  return (
    <section className="contact-me-page" id="contact-me-page">
      <h2 className="section-title"><strong>Contact me</strong></h2>
      <div className="contact-section">
        <ContactForm />
        <Recommendations />
      </div>
    </section>
  );
};

export default Contact;
