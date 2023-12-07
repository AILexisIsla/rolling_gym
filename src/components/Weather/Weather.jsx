import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Weatherapi() {
  const [datos, setDatos] = useState(null);

  useEffect(() => {
    axios.get('http://api.openweathermap.org/data/2.5/forecast?id=524901&appid={ace125f38104ae53c708c6b3a55561f2}')
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