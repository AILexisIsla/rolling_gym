import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/views/Login/Login";
import Register from "./components/views/Register/Register";
import Home from "./components/views/Home/Home";
import Error404 from "./components/views/eror404/Error404";

function App() {
     return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Login" element={<Login />} />
          <Route exact path="/Register" element={<Register />} />
          <Route exact path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
