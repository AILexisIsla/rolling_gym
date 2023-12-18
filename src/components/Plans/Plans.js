import React from "react";
import { plansData } from "../../data/plansData.js";
import "./Plans.css";
import whiteTick from "../../assets/whiteTick.png";
import { Link } from "react-router-dom";

export const Plans = () => {
  return (
    <div className="plans-container" id="Plans">
      <div className="blur plans-blur-1"></div>
      <div className="blur plans-blur-2"></div>
      <div className="programs-header" style={{ gap: "2rem" }}>
        <span className="stroke-text">LISTO PARA EMPEZAR</span>
        <span>TU VIAJE</span>
        <span className="stroke-text"> CON NOSOTROS</span>
      </div>
      {/* tarjetas planes */}
      <div className="plans">
        {plansData.map((plan, i) => (
          <div className="plan" key={i}>
            {plan.icon}
            <span>{plan.name}</span>
            <span>$ {plan.price}</span>
            <div className="features">
              {plan.features.map((feature, i) => (
                <div className="feature" key={i}>
                  <img src={whiteTick} alt="" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <div>
              <span>Ver más beneficios -{">"}</span>
            </div>
            <Link to="/pages/Details" id="btnP">
              <button className="btn">Únete ahora</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
