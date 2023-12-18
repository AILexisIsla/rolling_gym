import React, { useEffect, useState } from "react";
import axios from "axios";
import { BsCloudHaze2 } from "react-icons/bs";
import { AiOutlinePercentage } from "react-icons/ai";
import { BsCloudsFill } from "react-icons/bs";
import { BsCloudSun } from "react-icons/bs";
import { BsBrightnessHighFill } from "react-icons/bs";

function Weatherapi() {
  const [datos, setDatos] = useState(false);
  const kelvin = 273.15;
  const URL_CLIMA = process.env.REACT_APP_CLIMA;
  useEffect(() => {
    axios.get(URL_CLIMA).then((response) => {
      const temp = Math.floor(response.data.main.temp);
      const temperatura = Math.floor(temp - kelvin);
      const humedad = response.data.main.humidity;
      setDatos({ temperatura, humedad });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
