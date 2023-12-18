import React from "react";
import { Link } from 'react-router-dom';
import "../Error404/Error.css";

import Lottie from "lottie-react"
import animationData from "../../../assets/Animation - 1702872364939.json";

const Error404 = () => (
  <div className="min-h-screen flex items-center justify-content-center">
  <div className="text-center space-y-4">
    <h1 className="text-2x1 font-bold">ERROR 404</h1>
    <p>La página que ha solicitado no se encuentra disponible.</p>
  </div>
  <div className="flex gap-2 justify-center"><Link to="/"><button>Volver atras</button></Link></div>
  <div><Lottie className="lottie-animation" animationData={animationData}/></div>
</div>
);

export default Error404;