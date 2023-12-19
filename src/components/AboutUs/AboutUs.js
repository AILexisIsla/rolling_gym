import React from "react";
import image1 from "../../assets/levantamiento-de-pesas.png";
import image2 from "../../assets/apreton-de-manos.png";
import image3 from "../../assets/cinta.png";
import "./AboutUs.css";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="AboutUs">
      <section>
        <span className="stroke-text">Acerca </span>
        <span>de </span>
        <span class="stroke-text">nosotros</span>
      </section>

      <section className="boxAbout">
        <div>
          <h2 id="tittleAbout">Rolling Gym</h2>
          <p>
            <span id="stAbout">B</span>ienvenido a Rolling Gym, tu destino
            definitivo para alcanzar tus metas fitness y transformar tu estilo
            de vida. Fundado por un apasionado trío de entusiastas del fitness:
            Alexis Isla, Lucas Corbalan, Laín Robles y Julieta Ferreyra.
          </p>
        </div>

        <table className="tableA">
          <thead>
            <tr>
              <th className="encabezadoA thAbout">Nuestra Pasión</th>
              <th className="encabezadoA thAbout">Experiencia del Usuario</th>
              <th className="encabezadoA thAbout">
                Compromiso con la Excelencia
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="tdAbout">
                <img
                  className="imgAbout"
                  src={image1}
                  alt="persona levantando pesas"
                />
              </td>
              <td className="tdAbout">
                <img className="imgAbout" src={image2} alt="apreton de mano" />
              </td>
              <td className="tdAbout">
                <img className="imgAbout" src={image3} alt="5 estrellas" />
              </td>
            </tr>
            <tr>
              <td className="tdAbout">
                Nosotros, en Rolling Gym, estamos dedicados a inspirar y motivar
                a cada individuo que cruza nuestras puertas. Creemos que el
                fitness va más allá del ejercicio; es un viaje hacia el
                bienestar físico y mental.
              </td>
              <td className="tdAbout">
                Queremos que cada visita a Rolling Gym sea una experiencia
                memorable. Desde el momento en que entras por nuestras puertas,
                te sumerges en una comunidad acogedora y positiva.
              </td>
              <td className="tdAbout">
                Nos enorgullece ofrecer no solo resultados tangibles, sino
                también una experiencia excepcional. Nuestro compromiso con la
                excelencia se refleja en cada detalle, desde la limpieza de
                nuestras instalaciones hasta la calidad de nuestras clases y
                servicios.
              </td>
            </tr>
          </tbody>
        </table>
        <div id="idA">
          <Link id="btnAu" to="/">
            Volver al inicio
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
