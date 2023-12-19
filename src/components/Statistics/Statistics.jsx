import css from "./Statistics.module.css";
import { BsArrowUpShort } from "react-icons/bs";
import { groupNumber } from "../../Info";
import StatisticsChart from "../StatisticsChart/StatisticsChart";

const Statistics = () => {
  return (
    <div className={`${css.container} theme-container`}>
      <span className={css.title}>Estadísticas generales</span>

      <div className={`${css.cards} grey-container`}>
        <div>
          <div className={css.arrowIcon}>
            <BsArrowUpShort />
          </div>

          <div className={css.card}>
            <span>Plan más seleccionado del mes</span>
            <span>-*Plan mas seleccionado*-</span>
          </div>
        </div>

        <div className={css.card}>
          <span>Valor</span>
          <span>$ {groupNumber(455)}</span>
        </div>

        <div className={css.card}>
          <span>Ganancia</span>
          <span>$ {groupNumber(370000)}</span>
        </div>

        <div className={css.card}>
          <span>Promedio diario</span>
          <span>$ {groupNumber(2000)}</span>
        </div>
      </div>

      <StatisticsChart />
    </div>
  );
};

export default Statistics;
