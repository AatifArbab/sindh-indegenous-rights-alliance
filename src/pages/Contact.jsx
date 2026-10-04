import { useState } from "react";
import {
  FaCheckCircle,
  FaClock,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";

import SectionTitle from "../components/SectionTitle";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

const Contact = () => {
  const [formData, setFormData] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Contact message:", formData);
    setSubmitted(true);
    setFormData(initialForm);
  };

  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-content">
          <span className="page-label">Contact Us</span>
          <h1>We Would Be Happy to Hear From You</h1>
          <p>
            Contact our team for membership, partnerships, community support
            or general information.
          </p>
        </div>
      </section>

      <section className="contact-page section-padding">
        <div className="container">
          <SectionTitle
            label="Get in Touch"
            title="Contact Our Team"
            description="Send us a message or connect with us using the information below."
          />

          <div className="contact-grid">
            <div className="contact-information">
              <article className="contact-card">
                <FaMapMarkerAlt />
                <div>
                  <h3>Office Address</h3>
                  <p>Karachi, Sindh, Pakistan</p>
                </div>
              </article>

              <article className="contact-card">
                <FaPhoneAlt />
                <div>
                  <h3>Phone and WhatsApp</h3>
                  <a href="tel:+923253075415">+92 325 3075415</a>
                </div>
              </article>

              <article className="contact-card">
                <FaEnvelope />
                <div>
                  <h3>Email Address</h3>
                  <a href="mailto:info@sindhrights.org">
                    info@sindhrights.org
                  </a>
                </div>
              </article>

              <article className="contact-card">
                <FaClock />
                <div>
                  <h3>Office Hours</h3>
                  <p>Monday–Saturday: 10:00 AM–6:00 PM</p>
                </div>
              </article>
            </div>

            <div className="contact-form-wrapper">
              {submitted && (
                <div className="success-message" role="alert">
                  <FaCheckCircle />
                  <div>
                    <h3>Message received</h3>
                    <p>
                      Thank you for contacting us. Our team will respond as
                      soon as possible.
                    </p>
                  </div>
                </div>
              )}

              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Full name *</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email address *</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone number</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Your message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button type="submit" className="button button-primary">
                  Send Message
                </button>
              </form>
            </div>
          </div>

          <div className="contact-map">
            <iframe
              title="Organization office location"
              src="https://www.google.com/maps?q=Karachi,Sindh,Pakistan&output=embed"
              width="100%"
              height="450"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;