import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/views/Login/Login";
import Register from "./components/views/Register/Register";
import Home from "./components/views/Home/Home";
import Error404 from "./components/views/eror404/Error404";
import { useEffect, useState } from "react";
import Admin from "./components/views/Admin/Admin";
import axios from "./config/axios";
import CreateClass from "./components/views/CreateClass/CreateClass";
import EditClass from "./components/views/EditClass/EditClass";
import AboutUs from "./components/AboutUs/AboutUs";

function App() {

  const [classes, SetClasses] = useState([]);
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
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Login" element={<Login />} />
          <Route exact path="/Register" element={<Register />} />
          <Route exact path="/Admin" element={<Admin classes={classes} getClassApi={getClassApi} />} />
          <Route
            exact
            path="/class/create"
            element={<CreateClass URL={URL} getClassApi={getClassApi} />}
          />
          <Route exact path="/class/edit/:id" element={<EditClass />} />
          <Route exact path="*" element={<Error404 />} />
          <Route exact path="/AboutUs" element={<AboutUs />} />

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
