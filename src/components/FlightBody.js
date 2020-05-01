import React, { useEffect } from "react";
import { getTime } from "../redux/airportboard.selectors";

const Departure = ({ scoreboardList, allFlights }) => {
  useEffect(() => {}, []);
  console.log(allFlights);

  const searchFlightRender = () => {
    if (!allFlights.length)
      return (
        <tr>
          <td>NO RESULTS</td>
        </tr>
      );
    // if (allFlights.length > 0) {
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
  };

  //}

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
};

export default Departure;
