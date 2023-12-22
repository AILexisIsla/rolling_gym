import moment from "moment/moment";
import css from "./Layout.module.css";
import Sidebar from "../Sidebar/Sidebar";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import imageProfile from "../../assets/profile.png";
import "../../../src/index.css";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";

const Layout = ({
  classes,
  getClassApi,
  children,
  id,
  loading,
}) => {
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
          <Link to="/">
            <div className="x2">
              <div className={css.profile}>
                <img
                  src={imageProfile}
                  alt="foto de perfil"
                  className="imgProfile"
                />
                <div className={css.details}>
                  <span>{loading?.NameUser}</span>
                  <span>{loading?.emailUser} </span>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className={css.content}>
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
