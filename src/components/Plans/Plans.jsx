import React from "react";
import { plansData } from "../../data/plansData";
import "./Plans.css";
import whiteTick from "../../assets/whiteTick.png";

export const Plans = () => {
  return (
    <div className="plans-container">
      <div className="programs-header" style={{ gap: "2rem" }}>
        <span className="stroke-text">LISTO PARA EMPEZAR</span>
        <span>TU VIAJE</span>
        <span className="stroke-text"> CON NOSOTROS</span>
      </div>
      {/* tarjetas planes */}
      <div className="plans">
        {plansData.map((plan, i) => (
          <div className="plan" key={1}>
            {plan.icon}
            <span>{plan.name}</span>
            <span>$ {plan.price}</span>
            <div className="features">
              {plan.features.map((feature, i) => (
                <div className="feature">
                  <img src={whiteTick} alt="" />
                  <span key={i}>{feature}</span>
                </div>
              ))}
            </div>

            <div>
              <span>Ver más beneficios -></span>
            </div>
            <button className="btn">Únete ahora</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
