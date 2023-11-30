import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Login from "./components/views/Login/Login";
import Header from "./components/Header/Header";
import Register from "./components/views/Register/Register";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Register />
      </BrowserRouter>
    </div>
  );
}

export default App;
