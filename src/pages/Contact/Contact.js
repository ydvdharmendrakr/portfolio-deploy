import React, { useRef } from "react";
import ContactImage from "../../assets/images/contact.jpg";
import { BsLinkedin, BsGithub, BsInstagram, BsFacebook } from "react-icons/bs";
import { FaTwitterSquare } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import {
  alertNotification,
  successNotification,
} from "../../utils/Alert/Notification";

const Contact = () => {
  const form = useRef();

  //handle submit button
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await emailjs.sendForm(
        "service_9xte42q",
        "template_thzvu2n",
        form.current,
        "fCQ-rpa3yp1vNS7f7"
      );

      successNotification("Message send success fully!");
    } catch (error) {
      alertNotification("Error while sending message!");
    }
  };

  return (
    <>
      <div className="contact">
        <div className="card card0 border-0">
          <div className="row">
            <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
              <div className="card1">
                <div className="row border-line">
                  <img className="image" src={ContactImage} alt="contact" />
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6">
              <div className="card2 d-flex card border-0 px-4 py-5">
                <div className="row">
                  <div className="row">
                    <h6>
                      Contact With
                      <a
                        href="https://www.linkedin.com/in/ydvdharmendrakr/"
                        target="_blank"
                      >
                        <BsLinkedin color="blue" size={24} className="ms-2" />
                      </a>
                      <a
                        href="https://github.com/ydvdharmendrakr"
                        target="_blank"
                      >
                        <BsGithub color="black" size={25} className="ms-2" />
                      </a>
                      <a
                        href="https://www.instagram.com/kodewithdky/"
                        target="_balnk"
                      >
                        <BsInstagram color="red" size={25} className="ms-2" />
                      </a>
                      <a
                        href="https://www.facebook.com/ydvdharmendhrakr"
                        target="_balnk"
                      >
                        <BsFacebook color="blue" size={25} className="ms-2" />
                      </a>
                      <a
                        href="https://twitter.com/ydvdharmendrakr"
                        target="_balnk"
                      >
                        <FaTwitterSquare
                          color="blue"
                          size={25}
                          className="ms-2"
                        />
                      </a>
                    </h6>
                  </div>
                  <div className="row px-3 mb-4">
                    <div className="line" />
                    <small className="or text-center">OR</small>
                    <div className="line" />
                  </div>
                  <form ref={form} onSubmit={handleSubmit}>
                    <div className="row px-3">
                      <input
                        className="mb-3"
                        type="text"
                        name="to_name"
                        placeholder="Enter your name"
                        required
                      />
                    </div>
                    <div className="row px-3">
                      <input
                        className="mb-3"
                        type="email"
                        name="to_email"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                    <div className="row px-3">
                      <textarea
                        className="mb-3"
                        type="text"
                        name="message"
                        placeholder="Write your message"
                        required
                      />
                    </div>
                    <div className="row px-3">
                      <input type="submit" value="Send Message" />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
