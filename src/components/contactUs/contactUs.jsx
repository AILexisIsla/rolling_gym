import React from 'react'
import './contactUs.css';

const ContactUs = () => {
  return (
    <div className="ContactUs" id="join-us">
        <div className="left-j">
            <hr />
            <div>
                <span className="stroke-text">¿LISTO PARA</span>
                <span>SUBIR DE NIVEL</span>
            </div>
            <div>
                <span>TU CUERPO</span>
                <span className="stroke-text">CON NOSOTROS?</span>
            </div>
        </div>
        <div className="right-j">
            <button className="btn btn-j">Contáctenos</button>
        </div>
    </div>
  )
}

export default ContactUs;