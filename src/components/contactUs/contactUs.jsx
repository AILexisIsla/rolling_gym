import React from 'react'
import './contactUs.css';
import { Link } from 'react-router-dom';

const ContactUs = () => {
  return (
    <div className="ContactUs" id="contact">
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
            <Link to='/contacto' className="btn" id="btn-j">Contáctenos</Link>
        </div>
    </div>
  )
}

export default ContactUs;