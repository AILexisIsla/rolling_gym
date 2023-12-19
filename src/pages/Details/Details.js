import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../Details/Details.css";
import "../Calendar/Calendar.css"
import { Link } from "react-router-dom";
import wbanner from "../../assets/w-banner.png";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_h8244bk",
        "template_ycv3d6h",
        form.current,
        "H7P-XM_YI7W6oaBqO"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("mensaje enviado");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="hero" id="home">
      <div>
        <div className="left-h">
          <Header />
          <div className="center">
            <div className="containerD containerCalendar">
              <Link to="/">
                <button>volver</button>
              </Link>
              <img src={wbanner} alt="" className="w-banner" />
            </div>

            <form ref={form} onSubmit={sendEmail}>
              <label>Nombre</label>
              <input type="text" name="user_name" />
              <label>Email</label>
              <input type="email" name="user_email" />
              <label>Mensaje</label>
              <textarea name="message" />
              <input type="submit" value="Send" />
            </form>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Contact;
