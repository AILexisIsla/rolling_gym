import React, { useEffect, useState } from "react";
import { BsCloudHaze2 } from "react-icons/bs";
import { AiOutlinePercentage } from "react-icons/ai";
import { BsCloudsFill } from "react-icons/bs";
import { BsCloudSun } from "react-icons/bs";
import { BsBrightnessHighFill } from "react-icons/bs";
import { climaApi } from "../../config/axios";

function Weatherapi() {
  const [datos, setDatos] = useState(false);
  const kelvin = 273.15;
  const URL_CLIMA = process.env.REACT_APP_CLIMA;
  console.log(URL_CLIMA);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await climaApi.get(URL_CLIMA);
        const temp = Math.floor(response.data.main.temp);
        const temperatura = Math.floor(temp - kelvin);
        const humedad = response.data.main.humidity;
        setDatos({ temperatura, humedad });
      } catch (error) {
        console.error("Error al obtener datos del clima:", error);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [URL_CLIMA]);

  const getIconoPorClima = (temperatura) => {
    if (temperatura < 20) {
      return <BsCloudsFill style={{ color: "white", fontSize: "2.5rem" }} />;
    } else if (temperatura >= 20 && temperatura < 20) {
      return <BsCloudSun style={{ color: "yellow", fontSize: "2.5rem" }} />;
    } else {
      return (
        <BsBrightnessHighFill
          style={{ color: "#FFD700", fontSize: "2.5rem" }}
        />
      );
    }
  };

  return (
    <div>
      {datos.temperatura !== false ? (
        <div>
          <p className="datos-temp">
            {getIconoPorClima(datos.temperatura)} {datos.temperatura}°C &nbsp;
          </p>
          <p className="datos-temp">
            {" "}
            {
              <BsCloudHaze2
                style={{ color: "#87CEEB", fontSize: "1.8rem", padding: "3px" }}
              />
            }
            {datos.humedad}{" "}
            {<AiOutlinePercentage style={{ color: "#ffffff" }} />}
          </p>
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
}

export default Weatherapi;
