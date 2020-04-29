import React from "react";
import { aravivalFlightNumber } from "../redux/airportboard.selectors";
import "./main.scss";

// const findFlightNumber = (arrivalList, value) => {
//   console.log(value);
//   arrivalList.map((item) => {
//     return item === value;
//   });
// };

const Arrivel = ({ scoreboardList, value, arrivalList }) => {
  return (
    <table className="scoreboardList">
      <thead className="scoreboardList-header">
        <tr className="scoreboardList-header__tr">
          <th>Термінал</th>
          <th>Розклад</th>
          <th>Призначення</th>
          <th>Статус</th>
          <th>Авіакомпанія</th>
          <th>Рейс</th>
        </tr>
      </thead>

      {scoreboardList.arrival &&
        scoreboardList.arrival.map((item) => (
          <>
            <tbody className="scoreboardList-body">
              <tr className="scoreboardList-body__tr">
                <td>{item.term}</td>
                <td>{item.actual}</td>
                <td>{item["airportFromID.city"]}</td>
                <td>{item.status}</td>
                <td>{item.airline.ua.name}</td>
                <td>{item.codeShareData[0].codeShare}</td>
              </tr>
            </tbody>
          </>
        ))}
    </table>
  );
};

export default Arrivel;
