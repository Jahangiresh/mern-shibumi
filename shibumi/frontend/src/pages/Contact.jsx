import React from "react";
import "./contact.scss";
import { Link } from "react-router-dom";

import {
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineTwitter,
} from "react-icons/ai";
import { ContactUs } from "../components/ContactUs";
const Contact = () => {

  return (
    <div className="contact">
      <div className="contact__img">
        <div className="contact__container container">
          <div className="contact__container__row row">
            <div className="contact__container__row__left col-lg-6 col-12">
              <div className="contact__container__row__left__content">
                <h2>Contact Us</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                  perferendis mollitia deserunt?
                </p>
                <ContactUs />
              </div>
            </div>
            <div className="contact__container__row__right col-lg-6 col-12">
              <div className="contact__logo">
                <img
                  src="https://assets.website-files.com/5d89d4faecc118086c3813ec/5d89d6a2b4e4f7878dfb7590_logowhite-8.png"
                  alt="logo"
                />
              </div>
              <ul className="contact__ul">
                <li>
                  <p>Phone: 1 (888) 444-8866</p>
                  <p>Fax: 1 (888) 666-8866</p>
                  <p>Hours: M-F, 7 AM - 6 PM ET</p>
                </li>
                <li>
                  <p>Phone: 1 (888) 444-8866</p>
                  <p>Fax: 1 (888) 666-8866</p>
                  <p>Hours: M-F, 7 AM - 6 PM ET</p>
                </li>
                <li>
                  <iframe
                    className="myFrame"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6074.361723287169!2d49.9099896!3d40.4269939!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x627797f9edac97dd!2zQsO2ecO8a8Wfb3IgQnVsdmFyxLE!5e0!3m2!1sen!2s!4v1660744067198!5m2!1sen!2s"
                  ></iframe>
                </li>
              </ul>

              <div className="contact__social">
                <span>
                  <Link className="contact__social__links" to="instagram.com">
                    <AiOutlineInstagram />
                  </Link>
                </span>
                <span>
                  <Link className="contact__social__links" to="facebook.com">
                    <AiOutlineFacebook />
                  </Link>
                </span>
                <span>
                  <Link className="contact__social__links" to="twitter.com">
                    <AiOutlineTwitter />
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
