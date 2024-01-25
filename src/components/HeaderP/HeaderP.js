import React, { useState } from "react";
import "./HeaderP.css";
import Logo from "../../assets/logo.png";
import Bars from "../../assets/bars.png";
import { Link } from "react-router-dom";

const HeaderP = () => {
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
          <Link to="/">
              Home
            </Link>
          </li>
          <li>
          <Link to="/">
              
            </Link>
          </li>
          <li>
          <Link to="/">
              
            </Link>
          </li>
          <li>
          <Link to="/">
              
            </Link>
          </li>
          <li>
          <Link to="/">
              
            </Link>
          </li>
          <li>
          <Link to="/">
              
            </Link>
          </li>
          
        </ul>
      )}
    </div>
  );
};

export default HeaderP;
