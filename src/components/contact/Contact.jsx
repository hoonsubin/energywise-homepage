import React, { useRef } from 'react';
import './contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';
import emailjs from 'emailjs-com';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_4p1gsrk', 'template_1dbch2d', form.current, 'rp-RH3QnarBaguZfH')
      .then(() => {
        NotificationManager.success('Message sent!', 'Success', 3000);
        form.current.reset();
      })
      .catch((error) => {
        console.error('Email send error:', error);
        NotificationManager.error('An error occurred. Please try again later.', 'Error');
        form.current.reset();
      });
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Feedback</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>team@energywisee.solutions</h5>
            <a href="mailto:team@energywise.solutions" target="_blank" rel="noopener noreferrer">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+123456789</h5>
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
              Send a message
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="from_name" id="from_name" placeholder="Your Full Name" required />
          <input type="email" id="email" name="email" placeholder="Your Email" required />
          <textarea name="message" id="message" rows="7" placeholder="Your Feedback" required style={{ fontFamily: 'inherit' }}></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>

      <NotificationContainer />
    </section>
  );
};

export default Contact;
