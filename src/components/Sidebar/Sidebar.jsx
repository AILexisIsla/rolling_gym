import css from './Sidebar.module.css';
import { MdSpaceDashboard } from "react-icons/md";
import { AiFillCalendar, AiOutlineTable } from "react-icons/ai";
import { FaTasks } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logoD.png'

const Sidebar = () => {
    return (
        <div className={css.container}>

            <img src={logo} alt="logo" className={css.logo} />

            <div className={css.menu}>

                <NavLink to="dashboard" className={css.item} title={"Dashboard"}>
                    <MdSpaceDashboard size={30} />
                </NavLink>
                
                <NavLink
                    to="calendar"
                    className={css.item}
                    title="Calendario"
                >
                    <AiFillCalendar size={30} />
                </NavLink>

                <NavLink
                    to="board"
                    className={css.item}
                    title="Tablero Trello"
                >
                    <FaTasks size={30} />
                </NavLink>

                <NavLink
                    to="users"
                    className={css.item}
                    title="Usuario"
                >
                    <AiOutlineTable size={30} />
                </NavLink>
            </div>
        </div>
    )
}

export default Sidebar;