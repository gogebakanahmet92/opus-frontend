import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section className="contact" id="contact">
            <h2>Contact Us</h2>
            <div className="contact-info">
                <p>Phone: <a href="tel:+1234567890">+1234567890</a></p>
                <p>Email: <a href="mailto:info@opus-embedded.com">info@opus-embedded.com</a></p>
            </div>
            <form>
                <input type="text" placeholder="Your Name" required />
                <input type="email" placeholder="Your Email" required />
                <textarea placeholder="Your Message" required></textarea>
                <button type="submit">Send Message</button>
            </form>
        </section>
    );
};

export default Contact;
