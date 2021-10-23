import React, { useEffect, useState } from "react";
import { motion, useAnimation, transform } from "framer-motion";
import emailjs from "emailjs-com";

import "../../styles/contact/contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [formError, setFormError] = useState([]);

  const maxLength = 350;
  const mapRemainingToColor = transform([2, 6], ["#ff008c", "#ccc"]);
  const charRemains = maxLength - message.length;
  const controls = useAnimation();

  const validateName = (name) => {
    const re = /^[a-z\d- ]{3,35}$/i;
    const isGood = re.test(String(name));
    if (!isGood) {
      return "Error: field is not good, please check the length (min: 3, max: 35) and / or if there is a special character.";
    }
  };
  const validateEmail = (email) => {
    const re = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
    const isGood = re.test(String(email).toLowerCase());
    if (!isGood) {
      return "Error: email are not valid.";
    } else {
      return null;
    }
  };
  const validateMessage = (message) => {
    const re = /^[a-z\d-,\.!\s\t@ ]{5,350}$/i;
    const isGood = re.test(String(message));
    if (!isGood) {
      return "Error: field is not good, please check the length (min: 5) and / or if there is a special character.";
    }
  };

  const handleSend = (e) => {
    e.preventDefault();

    const validName = validateName(name);
    const validEmail = validateEmail(email);
    const validMessage = validateMessage(message);

    if (validName !== null && validMessage !== null && validEmail !== null) {
      setFormError([validName, validMessage, validEmail]);
    }
    if (validName !== null && validMessage == null && validEmail == null) {
      setFormError([validName]);
    }
    if (validName == null && validMessage !== null && validEmail == null) {
      setFormError([validMessage]);
    }
    if (validName == null && validMessage == null && validEmail !== null) {
      setFormError([validEmail]);
    }
    if (validName == null && validMessage == null && validEmail == null) {
      const target = [];
      target.push({ name: name, email: email, message: message });
      console.log(process.env.REACT_APP_EMAILJS_SERVICE);
      console.log(process.env.REACT_APP_EMAILJS_TEMPLATE);
      console.log(process.env.REACT_APP_EMAILJS_USER);
      emailjs
        .sendForm(
          process.env.REACT_APP_EMAILJS_SERVICE,
          process.env.REACT_APP_EMAILJS_TEMPLATE,
          e.target,
          process.env.REACT_APP_EMAILJS_USER
        )
        .then((res) => {
          setEmail("");
          setName("");
          setMessage("");
          setFormError([]);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  useEffect(() => {
    if (charRemains > 6) return;

    controls.start({
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 700,
        damping: 80,
      },
    });
  }, [message.length]);

  return (
    <main className="contact">
      <div className="contact_information">
        <div className="information_header">
          <h1>Contact</h1>
          <div className="information_get_touch">
            <h3>~ Let get in touch</h3>
            <p>
              If you have any question, or you need me for some work, don't
              hesitate to contact me here.
            </p>
          </div>
        </div>
        <form onSubmit={handleSend.bind(this)}>
          <div>
            <input
              type="text"
              name="name"
              placeholder="Your First Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="textarea-container">
            <textarea
              name="message"
              placeholder="Your Message"
              minLength={5}
              maxLength="350"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <motion.label
              className="message-length"
              htmlFor="message"
              animate={controls}
              style={{ color: mapRemainingToColor(charRemains) }}
            >
              {charRemains}
            </motion.label>
          </div>
          <div className="error-form">
            {formError.map((err) => (
              <p>{err}</p>
            ))}
          </div>
          <div>
            <motion.button type="submit">Send</motion.button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Contact;
