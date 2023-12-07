import React from "react";
import "./Hero.css";
import Header from "../Header/Header";
import "./Hero.css";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import NumberCounter from 'number-counter';

import Weatherapi from "../Weather/Weather";
const Hero = () => {

  const transition = {type: 'spring', duration: 3}
  const mobile = window.innerWidth<=768?true:false;
  return (
    <div className="hero" id='home'>
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />

        {/*El mejor gym de la ciudad */}

        <div className="thebestadd">

          <motion.div

          initial={{left: mobile? "165px": '238px'}}
          whileInView={{left: '8px'}}
          transition={{...transition, type: 'tween'}}

          ></motion.div>
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
            <span>
              <NumberCounter end={140} start={100} delay='4' preFix='+'/>
              </span>
            <span>Couchs expertos</span>
          </div>
          <div>
            <span>
            <NumberCounter end={978} start={800} delay='4' preFix='+'/>
            </span>
            <span>Miembros</span>
          </div>
          <div>
            <span>
            <NumberCounter end={50} start={0} delay='4' preFix='+'/>
            </span>
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
        <Link to='/Login' className="btn">Unete ahora</Link>

        <motion.div 
        initial={{right: '-1rem'}}
        whileInView={{right: '4rem'}}
        transition={transition}
        className="heart-rate">
          <img src={Heart} alt="" />
          <span>Cardio</span>
          <span>116 bpn</span>
        </motion.div>

        {/* imagenes hero */}
        <img src={hero_image} alt="" className="hero-image" />
        <motion.img 
        initial={{right: '11rem'}}
        whileInView={{right: '20rem'}}
        transition={transition}
        src={hero_image_back} alt="" className="hero-image-back" />

        {/* calorias*/}

        <motion.div 
        initial={{right: '37rem'}}
        whileInView={{right: '28rem'}}
        transition={transition}
        className="calories">
          <img src={Calories} alt="" />
          <div>
          <Weatherapi />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
