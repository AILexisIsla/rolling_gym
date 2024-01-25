import React, { useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";
import wbanner from "../../assets/w-banner.png";
import Footer from "../../components/Footer/Footer";
import HeaderP from "../../components/HeaderP/HeaderP";
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
    const userName = form.current["user_name"].value;
    const userEmail = form.current["user_email"].value;
    const userMessage = form.current["message"].value;

    if (!userName || !userEmail || !userMessage) {
      Swal.fire({
        title: "Error",
        text: "Por favor, completa todos los campos.",
        icon: "error",
        customClass: {
          popup: "swal-custom-style",
        },
      });
      return;
    }
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
          <HeaderP />
          <div className="center12 navD">
            <div className="container12">
              <img src={wbanner} alt="" className="w-banner" />
            </div>

            <form ref={form} onSubmit={sendEmail}>
              <label>Nombre</label>
              <input type="text" name="user_name" placeholder="Nombre" />
              <label>Email</label>
              <input type="email" name="user_email" placeholder="Email" />
              <label>Mensaje</label>
              <textarea name="message" placeholder="Envianos tu consulta" />
              <input type="submit" value="Enviar" />
              <Link to="/">
                <button className="btn-Home">Home</button>
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
