import React, { useState } from "react";
import "./Header.css";
import Logo from "../../assets/logo.png";
import Bars from "../../assets/bars.png";
import { Link } from "react-scroll";
import { Link as Homelink } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);

  const handleMenu = () => {
    if (mobile) {
      setMenuOpened(!menuOpened);
    }
  };
  const handleLinkClick = () => {
    setMenuOpened(false);
  };

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
          onClick={() => handleMenu(true)}
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
          {isHomePage ? (
              <Link
                onClick={handleLinkClick}
                activeClass="active"
                to="home"
                smooth={true}
              >
                Home
              </Link>
            ) : (
              <Homelink to="/" onClick={handleLinkClick}>
                Home
              </Homelink>
            )}
          </li>
          <li>
            {isHomePage ? (
              <Link
                onClick={handleLinkClick}
                activeClass="active"
                to="programs"
                smooth={true}
              >
                Programas
              </Link>
            ) : (
              <Homelink to="/" onClick={handleLinkClick}>
                Programas
              </Homelink>
            )}
          </li>
          <li>
            {isHomePage ? (
              <Link
                onClick={handleLinkClick}
                activeClass="active"
                to="reasons"
                smooth={true}
              >
                ¿Por qué nosotros?
              </Link>
            ) : (
              <Homelink to="/" onClick={handleLinkClick}>
                ¿Por qué nosotros?
              </Homelink>
            )}
          </li>
          <li>
            {isHomePage ? (
              <Link
                onClick={handleLinkClick}
                activeClass="active"
                to="Plans"
                smooth={true}
              >
                Planes
              </Link>
            ) : (
              <Homelink to="/" onClick={handleLinkClick}>
                Planes
              </Homelink>
            )}
          </li>
          <li>
            {isHomePage ? (
              <Link
                onClick={handleLinkClick}
                activeClass="active"
                to="testimonials"
                smooth={true}
              >
                Testimonios
              </Link>
            ) : (
              <Homelink to="/" onClick={handleLinkClick}>
                Testimonios
              </Homelink>
            )}
          </li>
          <li>
            {isHomePage ? (
              <Link
                onClick={handleLinkClick}
                activeClass="active"
                to="contact"
                smooth={true}
              >
                Contáctenos
              </Link>
            ) : (
              <Homelink to="/" onClick={handleLinkClick}>
                Contáctenos
              </Homelink>
            )}
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;
