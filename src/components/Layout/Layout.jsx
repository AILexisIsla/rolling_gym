import moment from "moment/moment";
import css from "./Layout.module.css";
import { BiSearch } from "react-icons/bi";
import Sidebar from "../Sidebar/Sidebar";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import imageProfile from "../../assets/profile.png";
import "../../../src/index.css";

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

          <div className={css.searchBar}>
            <BiSearch size={20} />
            <input type="text" placeholder="Buscar" />
          </div>

          <div className={css.profile}>
            <img
              src={imageProfile}
              alt="foto de perfil"
              className="imgProfile"
            />
            <div className={css.details}>
              <span>Lucas Corbalan</span>
              <span>oscar.corbala@gmail.com</span>
            </div>
          </div>
        </div>

        <div className={css.content}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
