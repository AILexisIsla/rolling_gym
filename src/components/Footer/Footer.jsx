import React from "react";
import "./Footer.css";
import Github from "../../assets/github.png";
import Instagram from "../../assets/instagram.png";
import Linkedin from "../../assets/linkedin.png";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

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
            <li>
              <div className="social-links">
                <a href="https://github.com/AILexisIsla/rolling_gym/">
                  <img src={Github} alt="link para Github" />
                </a>

                <a href="https://www.instagram.com/">
                  <img src={Instagram} alt="link para Instagram" />
                </a>

                <a href="https://www.linkedin.com/">
                  <img src={Linkedin} alt="link para Linkedin" />
                </a>
              </div>
            </li>
          </ul>
        </div>

        <div className="column">
          <ul>
            <li className="f-izq">¿NECESITAS AYUDA?</li>
            <div className="f-qf">
              <li>
                <Link to="/contacto">Contactanos</Link>
              </li>
              <li>
                <Link to="/*">Terminos y condiciones</Link>
              </li>
              <li>
                <Link to="/*">Trabaja con nosotros</Link>
              </li>
              <li>
                <Link to="/AboutUs">Acerca de nosotros</Link>
              </li>
            </div>
          </ul>
        </div>
      </div>
      <div className="blur blur-f-1"></div>
      <div className="blur blur-f-2"></div>
    </div>
  );
};

export default Footer;
