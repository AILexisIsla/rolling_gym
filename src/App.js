import {
  BrowserRouter,
  Route,
  Routes} from "react-router-dom";
import "./App.css";
import "./index.css";
import Login from "./components/views/Login/Login";
import Register from "./components/views/Register/Register";
import Home from "./components/views/Home/Home";
import Error404 from "./components/views/Error404/Error404";
import { useEffect, useState } from "react";
import axios from "./config/axios";
import CreateClass from "./components/views/CreateClass/CreateClass";
import EditClass from "./components/views/EditClass/EditClass";
import AboutUs from "./components/AboutUs/AboutUs";
import Dashboard from "./components/Pages/Dashboard/Dashboard";
import Layout from "./components/Layout/Layout";
import Calendar from "./components/Pages/Calendar/Calendar";
import DataGrid from "./components/Pages/DataGrid/DataGrid";
import Contacto from "./components/views/Contacto/Contacto";
import Details from "./pages/Details/Details";

const userInfoLs = JSON.parse(localStorage.getItem("user-token"));

function App() {
  const [classes, SetClasses] = useState([]);
  const [loading, SetLoading] = useState(userInfoLs);
  const URL = process.env.REACT_APP_GYMNASIO_ROLLING_CLASS;

  useEffect(() => {
    getClassApi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const getClassApi = async () => {
    try {
      const res = await axios.get(URL);
      SetClasses(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={<Home loading={loading} SetLoading={SetLoading} />}
          />
          <Route
            exact
            path="/Login"
            element={<Login SetLoading={SetLoading} />}
          />
          <Route
            exact
            path="/Register"
            element={<Register SetLoading={SetLoading} />}
          />
          <Route
            exact
            path="/Admin"
            element={<Admin classes={classes} getClassApi={getClassApi} />}
          />
          <Route
            exact
            path="/class/create"
            element={<CreateClass URL={URL} getClassApi={getClassApi} />}
          />
          <Route exact path="/class/edit/:id" element={<EditClass />} />
          <Route exact path="/AboutUs" element={<AboutUs />} />

          {/* Pagina de administacion */}
          <Route
            exact
            path="/Admin"
            element={
              <Layout
                classes={classes}
                getClassApi={getClassApi}
                id="dashboard"
              />
            }
          >
            <Route path="Dashboard" element={<Dashboard />} />
            <Route path="Calendar" element={<Calendar />} />
            <Route path="Users" element={<DataGrid />} />

          </Route>
          <Route exact path="/contacto" element={<Contacto />} />
          <Route exact path="*" element={<Error404 />} />
          <Route exact path="/pages/Details" element={<Details />} />
          {/*<Route path="/" element={<Layout/>}>

          <Route path="dashboard" element={<Dashboard/>}/>
          <Route path="calendar" element={<Calendar/>}/>
          <Route path="board" element={<BoardPage/>}/>
          <Route path="users" element={<DataGrid/>}/>
          
          </Route>*/}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
