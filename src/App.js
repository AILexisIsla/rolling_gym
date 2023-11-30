import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Login from "./components/views/Login/Login";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Login />
      </BrowserRouter>
    </div>
  );
}

export default App;
