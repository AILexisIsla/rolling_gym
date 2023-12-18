import React from "react";
import { Link } from 'react-router-dom';
import "../Error404/Error.css";
import img1 from "../../../assets/img1.svg.png";

const Error404 = () => (
  <div className="containerE">
    <img src={img1} alt="" />
    <h1>La página que ha solicitado no se encuentra disponible</h1>
    <div className="boton">
    <Link to="/"><button>Volver atras</button></Link>
    </div>
  </div>
);

export default Error404;