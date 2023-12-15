import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "./index.css";
import Login from "./components/views/Login/Login";
import Register from "./components/views/Register/Register";
import Home from "./components/views/Home/Home";
import Error404 from "./components/views/Error404/Error404";
import { useEffect, useState } from "react";
import { classInstance, userInstance } from "./config/axios";
import EditClass from "./components/views/EditClass/EditClass";
import AboutUs from "./components/AboutUs/AboutUs";
import Dashboard from "./pages/Dashboard/Dashboard";
import Layout from "./components/Layout/Layout";
import Calendar from "./pages/Calendar/Calendar";
import DataGrid from "./pages/DataGrid/DataGrid";
import Contacto from "./components/views/Contacto/Contacto";
import Details from "./pages/Details/Details";

const userInfoLs = JSON.parse(localStorage.getItem("user-token"));

function App() {
  const [classes, SetClasses] = useState([]);
  const [user, SetUser] = useState([]);
  const [loading, SetLoading] = useState(userInfoLs);
  const URL = process.env.REACT_APP_GYMNASIO_ROLLING_CLASS;
  const URLUSER = process.env.REACT_APP_GYMNASIO_ROLLING_USER;

  useEffect(() => {
    getClassApi();
    getUserApi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const getClassApi = async () => {
    try {
      const res = await classInstance.get(URL);
      SetClasses(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  const getUserApi = async () => {
    try {
      const response = await userInstance.get(URLUSER);
      SetUser(response.data);
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
            <Route
              path="Calendar"
              element={<Calendar getClassApi={getClassApi} />}
            />
            <Route
              path="Users"
              element={<DataGrid getUserApi={getUserApi} user={user} />}
            />
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
