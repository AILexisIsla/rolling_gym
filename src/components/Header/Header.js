import React, { useState } from "react";
import "./Header.css";
import Logo from "../../assets/logo.png";
import Bars from "../../assets/bars.png";
import { Link } from "react-scroll";
import { Link as HomeLink} from "react-router-dom";

const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);
  return (
    <div className="header" id="home">
      <img src={Logo} alt="" className="logo" />

      {menuOpened === false && mobile === true ? (
        <div
          style={{
            backgroundColor: "var(--appColor)",
            padding: "0.5rem",
            borderRadius: "5px",
          }}
          onClick={() => setMenuOpened(true)}
        >
          <img
            src={Bars}
            alt=""
            style={{ width: "1.5rem", height: "1.5rem" }}
          />
        </div>
      ) : (
        <ul className="headermenu">
          <li>
            <HomeLink
              onClick={() => setMenuOpened(false)}
              activeClass="active"
              to="/"
              smooth={true}
            >
              Home
            </HomeLink>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="programs"
              smooth={true}
            >
              Programa
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="reasons"
              smooth={true}
            >
              ¿Por qué nosotros?
            </Link>
          </li>
          <li>
            <Link onClick={() => setMenuOpened(false)} to="Plans" smooth={true}>
              Planes
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="testimonials"
              smooth={true}
            >
              Testimonios
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="contact"
              smooth={true}
            >
              Contáctenos
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;
