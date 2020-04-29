import React from "react";

const Departure = ({ scoreboardList }) => {
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

      {scoreboardList.departure &&
        scoreboardList.departure.map((item) => (
          <tbody className="scoreboardList-body">
            <tr className="scoreboardList-body__tr">
              <td>{item.term}</td>
              <td>{item.actual}</td>
              <td>{item["airportToID.city"]}</td>
              <td>{item.status}</td>
              <td>{item.airline.ua.name}</td>
              <td>{item.codeShareData[0].codeShare}</td>
            </tr>
          </tbody>
        ))}
    </table>
  );
};

export default Departure;
