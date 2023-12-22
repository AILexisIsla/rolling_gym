import React, { useEffect, useState } from "react";
import "./contactUs.css";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const [userMessage, setUserMessage] = useState("");

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

  const sendEmail = (e) => {
    e.preventDefault();

    if (!userMessage.trim()) {
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
        e.target, // Usa directamente el evento del formulario
        "H7P-XM_YI7W6oaBqO"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("mensaje enviado");
          mostrarAlerta();
          // Puedes reiniciar el estado del mensaje aquí si es necesario
          setUserMessage("");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="ContactUs" id="contact">
      <div className="left-j">
        <hr />
        <div>
          <span className="stroke-text">¿LISTO PARA</span>
          <span>SUBIR DE NIVEL</span>
        </div>
        <div>
          <span>TU CUERPO</span>
          <span className="stroke-text">CON NOSOTROS?</span>
        </div>
      </div>
      <div className="right-j">
        <form className="form-login-contactanos" onSubmit={sendEmail}>
          <div className="form-group-contactanos">
            <textarea
              name="message"
              className="input-login-contactanos"
              placeholder="Contactanos"
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
            ></textarea>
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Enviar"
              className="submit-button-contactanos"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;