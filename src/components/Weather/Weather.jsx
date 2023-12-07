import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Weatherapi() {
  const [datos, setDatos] = useState(null);

  useEffect(() => {
    axios.get('http://api.weatherapi.com/')
      .then(response => {
        setDatos(response.data);
      });
  }, []);

  return (
    <div>
      {datos ? (
        Object.keys(datos).map((key, i) => (
          <div key={i}>
            <strong>{key}:</strong> {datos[key]}
          </div>
        ))
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
}

export default Weatherapi;