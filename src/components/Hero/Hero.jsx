import React from "react";
import "./Hero.css";
import Header from "../Header/Header";
const Hero = () => {
  return (
    <div className="hero">
      <div className="left-h">
        <Header />

        {/*El mejor gym de la ciudad */}

        <div className="thebestadd">
          <div></div>
          <span>El mejor Gym en la ciudad</span>
        </div>

        {/*Hero Heading-Nabvar para editar */}

        <div className="hero-text">
          <div>
            <span className="stroke-text">Moldea </span>
            <span>tu</span>
          </div>
          <div>
            <span>cuerpo ideal</span>
          </div>
          <div className="">
            <span>
              Aquí te ayudaremos a moldear y construir tu cuerpo ideal y a vivir
              tu vida al máximo.
            </span>
          </div>
        </div>

        {/* figures */}
        <div className="figures">
          <div>
            <span>+ 140</span>
            <span>Couchs expertos</span>
          </div>
          <div>
            <span>+ 978</span>
            <span>Miembros</span>
          </div>
          <div>
            <span>+ 50</span>
            <span>Programas fitness</span>
          </div>
        </div>

        {/* botones hero */}
        <div className="hero-buttons">
          <buttons className="btn">Comienza</buttons>
          <buttons className="btn">Aprende más</buttons>
        </div>
      </div>
      <div className="right-h">right side</div>
    </div>
  );
};

export default Hero;
