import React, { useState } from "react";
import "../Css/Contact.css";
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaLocationDot } from "react-icons/fa6";
import { IoCall, IoLogoGithub } from "react-icons/io5";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission, e.g., send data to backend or show a success message
    console.log(formData);
    // Reset form fields after submission (optional)
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };
  return (
    <div className="contact-pages">
      <div className="contact-div">
        <form onSubmit={handleSubmit}>
          {/* <h2>Contact Us</h2> */}
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
        <div className="home-icon">
          <a
            className="icon"
            href="https://www.linkedin.com/in/pranali-mali-852612258?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          >
            <FaLinkedin />
          </a>
          <a href="https://github.com/PranaliMali257">
            <IoLogoGithub />
          </a>
        </div>
      </div>

      <div className="contact-field">
        <div className="textcontainer">
          <div className="item">
            <MdEmail className="icon" />
            <h3>Mail</h3>
            <span>malipranali288@gamil.com</span>
          </div>

          <div className="item">
            <FaLocationDot className="icon" />
            <h3>Address</h3>
            <span>Yawal,Jalgoan</span>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7441.17142047405!2d75.69734648089566!3d21.16887937206237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd900bd71484f67%3A0x3dacfee8b53de167!2sYawal%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1719393793392!5m2!1sen!2sin"
              width="550"
              height="300"
              // margin-left="600px"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="item">
            <IoCall className="icon" />
            <h3>Phone</h3>
            <span>9146873083</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
