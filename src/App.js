import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/views/Login/Login";
import Register from "./components/views/Register/Register";
import Home from "./components/views/Home/Home";
import Error404 from "./components/views/eror404/Error404";
import { useEffect, useState } from "react";
import Admin from "./components/views/Admin/Admin";
import AboutUs from "./components/AboutUs/AboutUs";

function App() {
  const [classes, SetClasses] = useState([]);

  useEffect(() => {
    getClassApi();
  }, []);

  const getClassApi = async () => {
    const res = await fetch("http://localhost:4002/v1/class");
    const classAPI = await res.json();
    SetClasses(classAPI);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Login" element={<Login />} />
          <Route exact path="/Register" element={<Register />} />
          <Route exact path="/Admin" element={<Admin classes={classes} />} />
          <Route exact path="*" element={<Error404 />} />
          <Route exact path="/AboutUs" element={<AboutUs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
