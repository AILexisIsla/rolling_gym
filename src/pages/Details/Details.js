import React, { useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";
import wbanner from "../../assets/w-banner.png";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Swal from "sweetalert2";
import "./Details.css";

const Contact = () => {
  useEffect(() => {}, []);

  const mostrarAlerta = () => {
    Swal.fire({
      title: "Good job!",
      text: "Mensaje enviado!",
      icon: "success",
      customClass: {
        popup: "swal-custom-style",
      },
    });
  };

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
          mostrarAlerta();
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <div>
        <div>
          <Header />
          <div className="center12 navD">
            <div className="container12">
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
              <Link to="/">
                <button className="quemado">volver</button>
              </Link>
            </form>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Contact;
