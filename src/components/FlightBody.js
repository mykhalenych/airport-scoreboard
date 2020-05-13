import React from "react";
import { getTime } from "../helpers/helpers";

const FlightBody = ({ renderList, searchedFlight }) => {
  if (searchedFlight !== null) {
    if (searchedFlight.length === 0) {
      return <div className="error__tr">Flight not found</div>;
    } else {
      return searchedFlight.map((item) => (
        <tbody key={item.ID} className="scoreboardList-body">
          <tr className="scoreboardList-body__tr">
            <td>{item.term}</td>
            <td>{getTime(item.actual)}</td>
            <td>{item["airportToID.city_en"]}</td>
            <td>{item.status === "CX" ? "Canceled" : item.status}</td>
            <td className="scoreboardList-body__tr-item">
              {
                <img
                className="image__logo"
                src={item.airline.en.logoSmallName}
                alt="logo"
                />
              }
              {item.codeShareData[0].airline.en.name}
            </td>
            <td>{item.codeShareData[0].codeShare}</td>
          </tr>
        </tbody>
      ));
    }
  }
  return renderList.map((item) => (
    <tbody key={item.ID}  className="scoreboardList-body">
      <tr className="scoreboardList-body__tr">
        <td>{item.term}</td>
        <td>{getTime(item.actual)}</td>
        <td>{item.city}</td>
        <td>{item.status === "CX" ? "Canceled" : item.status}</td>
        <td className="scoreboardList-body__tr-item">
          {
            <img
              className="image__logo"
              src={item.airline.en.logoSmallName}
              alt="logo"
            />
          }
          {item.codeShareData[0].airline.en.name}
        </td>{" "}
        <td>{item.codeShareData[0].codeShare}</td>
      </tr>
    </tbody>
  ));
};

export default FlightBody;
