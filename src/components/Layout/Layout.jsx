import moment from "moment/moment";
import css from "./Layout.module.css";
import { BiSearch } from "react-icons/bi";
import Sidebar from "../Sidebar/Sidebar";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import imageProfile from "../../assets/profile.png";
import "../../../src/index.css";
import { Link } from "react-router-dom";

// import { MdSpaceDashboard } from "react-icons/md";
// import { AiFillCalendar, AiOutlineTable } from "react-icons/ai";
// import flechaI from "../../assets/flecha-izquierda.png";

const Layout = ({ classes, getClassApi, children, id }) => {
  const { pathname } = useLocation();

  return (
    <div className={`${css.container} ${css.dashboardApp} ${classes}`}>
      <Sidebar />

      {pathname === "/" && <Navigate to="/Dashboard" />}

      <div className={css.dashboard}>
        <div className={css.topBaseGradients}>
          <div className="gradient-red"></div>
          <div className="gradient-orange"></div>
          <div className="gradient-blue"></div>
        </div>

        <div className={css.header}>
          <span>{moment().format("dddd, Do MMM YYYY")}</span>

          

          <Link to='/'><div className={css.profile}>
          <img
              src={imageProfile}
              alt="foto de perfil"
              className="imgProfile"
            />
            <div className={css.details}>
              <span>Lucas Corbalan</span>
              <span>oscar.corbala@gmail.com</span>
            </div>
          </div></Link>
        </div>
        <div className={css.content}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
