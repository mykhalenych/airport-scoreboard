import React from "react";
import "./main.scss";
import { getTime } from "../redux/airportboard.selectors";

const Arrivel = ({ scoreboardList, allFlights }) => {
  if (!scoreboardList) {
    return <div></div>;
  }
  return (
    scoreboardList.arrival &&
    scoreboardList.arrival.map((item) => (
     // <tbody className="scoreboardList-body">
        <tr className="scoreboardList-body__tr">
          <td>{item.term}</td>
          <td>{getTime(item.actual)}</td>
          <td>{item["airportFromID.city"]}</td>
          <td>{item.status === "CX" ? "Скасовано" : item.status}</td>
          <td>{item.airline.ua.name}</td>
          <td>{item.codeShareData[0].codeShare}</td>
        </tr>
     // </tbody>
    ))
  );
};

export default Arrivel;
