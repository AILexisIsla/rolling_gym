import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaThermometerFull } from "react-icons/fa";
import { FaThermometerEmpty } from "react-icons/fa";
import { FaThermometerHalf } from "react-icons/fa";

function Weatherapi() {
  const [datos, setDatos] = useState(false);
  const kelvin = 273.15;
  useEffect(() => {
    axios
      .get(
        "https://api.openweathermap.org/data/2.5/weather?q=tucuman&appid=5f275a2b80c7aabd2aaae0a48456e599"
      )
      .then((response) => {
        const temp = Math.floor(response.data.main.temp);
        const temperatura = Math.floor(temp - kelvin);
        setDatos(temperatura);
      });
  }, []);
  const getIconoPorTemperatura = (temperatura) => {
    if (temperatura < 10) {
      return <FaThermometerEmpty style={{ color: "green", fontSize:'25px' }}/>;
    } else if (temperatura >= 10 && temperatura < 20) {
      return <FaThermometerHalf style={{ color: "lightblue", fontSize:'25px' }}/>;
    } else {
      return <FaThermometerFull style={{ color: "red", fontSize:'25px' }} />;
    }
  };
  return (
    <div>
      {datos !== false ? (
        <p className="datos-temp">
          {getIconoPorTemperatura(datos)} {datos}°C
        </p>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
}

export default Weatherapi;
