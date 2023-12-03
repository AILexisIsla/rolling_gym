import React from "react";
import "./Footer.css";
import Github from "../../assets/github.png";
import Instagram from "../../assets/instagram.png";
import Linkedin from "../../assets/linkedin.png";
import Logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <div className="Footer-container">
      <hr />
      <div className="footer">

        <div className="column">

        <div className="logo-f">
          <img src={Logo} alt="Logo del Gym" />
        </div>
        </div>

        
      <div className="column">
        <ul>
            <li>NUESTRAS REDES</li>
            <li>

          <div className="social-links">
            <img src={Github} alt="link para Github" />
            <img src={Instagram} alt="link para Instagram" />
            <img src={Linkedin} alt="link para Linkedin" />
          </div>

            </li>
        </ul>
        </div>

        <div className="column">
         <ul>
            <li>¿NECESITAS AYUDA?</li>
            <li>Preguntas frecuentes</li>
            <li>Terminos y condiciones</li>
            <li>Trabaja con nosotros</li>

         </ul>
        </div>

        </div>
    </div>
  );
};

export default Footer;
