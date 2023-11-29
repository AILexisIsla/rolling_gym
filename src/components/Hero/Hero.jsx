import React from "react";
import "./Hero.css";
import Header from "../Header/Header";
import "./Hero.css";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
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
            <span className="stroke-text">Activa </span>
            <span>tu</span>
          </div>
          <div>
            <span>cuerpo</span>
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
      <div className="right-h">
        <button className="btn">Unete ahora</button>

        <div className="heart-rate">
          <img src={Heart} alt="" />
          <span>Cardio</span>
          <span>116 bpn</span>
        </div>

        {/* imagenes hero */}
        <img src={hero_image} alt="" className="hero-image" />
        <img src={hero_image_back} alt="" className="hero-image-back" />

        {/* calorias*/}

        <div className="calories">
          <img src={Calories} alt="" />
          <div>
          <span>Calorias Quemadas</span>
          <span>kcal 220</span>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Hero;
