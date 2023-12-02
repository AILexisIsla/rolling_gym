import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
 reasonsAndPlans
import Hero from "./components/Hero/Hero";
import Plans from "./components/Plans/Plans";
import Programs from "./components/Programs/Programs";
import Reasons from "./components/Reasons/Reasons";

import Login from "./components/views/Login/Login";
import Register from "./components/views/Register/Register";
import Home from "./components/views/Home/Home";

function App() {
  return (
    <div className="App">
      <Hero />
      <Programs />
      <Reasons />
      <Plans />

      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Login" element={<Login />} />
          <Route exact path="/Register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
