import React, { useEffect } from "react";
import { getTime } from "../redux/airportboard.selectors";

const Departure = ({ scoreboardList, allFlights }) => {
  useEffect(() => {
    ;
  }, []);
  console.log(allFlights)
  if (allFlights.length > 0) {
    return allFlights.map((item) => (
      <tbody className="scoreboardList-body">
        <tr className="scoreboardList-body__tr">
          <td>{item.term}</td>
          <td>{getTime(item.actual)}</td>
          <td>{item["airportToID.city"]}</td>
          <td>{item.status === "CX" ? "Скасовано" : item.status}</td>
          <td>{item.airline.ua.name}</td>
          <td>{item.codeShareData[0].codeShare}</td>
        </tr>
      </tbody>
    ));
  } else if (allFlights === []  ) {
    return <div>We have a trable</div>;
  } else {
    return (
      scoreboardList.departure &&
      scoreboardList.departure.map((item) => (
        <tbody className="scoreboardList-body">
          <tr className="scoreboardList-body__tr">
            <td>{item.term}</td>
            <td>{getTime(item.actual)}</td>
            <td>{item["airportToID.city"]}</td>
            <td>{item.status === "CX" ? "Скасовано" : item.status}</td>
            <td>{item.airline.ua.name}</td>
            <td>{item.codeShareData[0].codeShare}</td>
          </tr>
        </tbody>
      ))
    );
  }
};

export default Departure;
