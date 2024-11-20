import React from 'react';
import "../styles/contact.css";

const Contact = () => {
  return (
    <div id="Contact">
      <section className="contact-section">
        <div className="contact-container">
          <div className="map-section">
            <iframe
              width="100%"
              height="100%"
              className="map-iframe"
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.328694192162!2d67.10105717442822!3d24.818430546939844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33b7876b3ff6b%3A0xcef7ab7b91a96f4!2sKarachi%20Public%20School%20Rd%2C%20Block%20A%20Bhittai%20Colony%20Korangi%20Creek%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1731248816727!5m2!1sen!2s"
              style={{ filter: "contrast(1.2) opacity(0.4)" }}
            />
            <div className="contact-details">
              <div className="contact-address">
                <h2 className="contact-heading">ADDRESS</h2>
                <p>Crossing Korangi Karachi</p>
              </div>
              <div className="contact-info">
                <h2 className="contact-heading">EMAIL</h2>
                <a href="mailto:shumailayousuf1000@gmail.com">shumailayousuf1000@gmail.com</a>
                <h2 className="contact-heading">PHONE</h2>
                <p>0312-2358359</p>
              </div>
            </div>
          </div>
          <div className="form-section">
            <h2>Contact</h2>
            <p>Feel free to contact</p>
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message"></textarea>
              </div>
              <button type="submit" className="form-button">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
