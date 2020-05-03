import React, { useState, useEffect } from "react";
import { useLocation, Link, Switch, useParams } from "react-router-dom";
import "./main.scss";
import FlightLandSharpIcon from "@material-ui/icons/FlightLandSharp";
import FlightTakeoffSharpIcon from "@material-ui/icons/FlightTakeoffSharp";
import qs from "qs";
import * as actions from "../redux/airportboard.action";
import { connect } from "react-redux";
import FlightBody from "./FlightBody";
import { airoportBoardListSelector } from "../redux/airportboard.selectors";

const Main = ({ scoreboardList, getScoreBoardList }) => {
  useEffect(() => {
    getScoreBoardList();
  }, []);

  const location = useLocation();
  const [status, setActive] = useState("departure");

  const arrivalClass = status === "arrival" ? "_active" : "_inactive";
  const departureClass = status === "departure" ? "_active" : "_inactive";
  useEffect(() => {
    if (location.pathname.includes("arrival")) {
      setActive("arrival");
    } else if (location.pathname.includes("departure")) {
      setActive("departure");
    }
  }, [location]);

  let { direction } = useParams();
  let renderList = [];

  if (scoreboardList) {
    if (direction === "arrival") {
      renderList = scoreboardList.arrival
        .filter((item) => item.airline !== undefined)
        .map((item) => {
          return {
            ...item,
            city: item["airportFromID.city_en"],
            time: item.timeArrShedule,
          };
        })
        .sort((a, b) => a.time - b.time);
    } else {
      renderList = scoreboardList.departure
        .filter((item) => item.airline !== undefined)
        .map((item) => {
          return {
            ...item,
            city: item["airportToID.city_en"],
            time: item.timeArrShedule,
          };
        })
        .sort((a, b) => a.time - b.time);
    }
  }

  const search = qs.parse(useLocation().search, { ignoreQueryPrefix: true })
    .search;
  let searchedFlight = !search
    ? null
    : scoreboardList.departure.filter((flightItem) => {
        return flightItem.codeShareData[0].codeShare === search;
      });

  return (
    <>
      <div className="conteiner">
        <button className={`btn conteiner__btn-departure${departureClass}`}>
          <FlightTakeoffSharpIcon />
          <Link to="/departure">departure</Link>
        </button>
        <button className={`btn conteiner__btn-arrival${arrivalClass}`}>
          <FlightLandSharpIcon />
          <Link to="/arrival">arrival</Link>
        </button>
      </div>
      <table className="scoreboardList">
        <thead className="scoreboardList-header">
          <tr className="scoreboardList-header__tr">
            <th>Terminal</th>
            <th>Schedule</th>
            <th>Destination	</th>
            <th>Status</th>
            <th>Airline</th>
            <th>Flight</th>
          </tr>
        </thead>
        <Switch>
          <FlightBody renderList={renderList} searchedFlight={searchedFlight} />
        </Switch>
      </table>
    </>
  );
};

const mapDispatch = {
  getScoreBoardList: actions.getBoardList,
};
const mapState = (state) => {
  return {
    scoreboardList: airoportBoardListSelector(state),
  };
};

export default connect(mapState, mapDispatch)(Main);
