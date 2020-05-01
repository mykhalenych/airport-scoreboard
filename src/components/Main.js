import React, { useState, useEffect } from "react";
import { useLocation, Route, Link, Switch, useParams } from "react-router-dom";
import Arrival from "./Arrival";
import Departure from "./Departure";
import "./main.scss";
import qs from "qs";
import SearchSharpIcon from "@material-ui/icons/SearchSharp";
import FlightLandSharpIcon from "@material-ui/icons/FlightLandSharp";
import FlightTakeoffSharpIcon from "@material-ui/icons/FlightTakeoffSharp";

const Main = ({ scoreboardList }) => {
  const location = useLocation();
  const [value, setValue] = useState("");
  const [status, setActive] = useState("departure");
  const arrivalClass = status === "arrival" ? "_active" : "_inactive";
  const departureClass = status === "departure" ? "_active" : "_inactive";
  
  useEffect(() => {
    if (location.pathname.includes("arrivel")) {
      setActive("arrival");
    } else if (location.pathname.includes("departure")) {
      setActive("departure");
    }
  }, [location]);

  const search = qs.parse(useLocation().search, { ignoreQueryPrefix: true })
    .search;
  let allFlights = !search
    ? scoreboardList
    : scoreboardList.departure.filter((flight) => {
        return flight.codeShareData[0].codeShare === search;
      });
   
  const onChange = (event) => {
    setValue(event.target.value);
  };


  return (
    <div className="wrap">
      <section className="scoreboard">
        <h2 className="scoreboard__title">Пошук Рейсу</h2>
        <form
          //onSubmit={handleSubmit}
          className="scoreboard__form"
        >
          <div className="scoreboard__form">
            <input
              className="scoreboard__form-search"
              defaultValue={"Номер рейсу або місто"}
              value={value}
              onChange={onChange}
              name="input"
              placeholder="Для пошуку напишіть номер рейсу"
            />
            <SearchSharpIcon className="scoreboard__form-icon" />
          </div>
          <button className="scoreboard__form-submit" type="submit">
            <Link to={`/departures?search=${value}`}>Пошук</Link>
          </button>
        </form>
      </section>
      <div className="conteiner">
        <button className={`btn conteiner__btn-departure${departureClass}`}>
          <FlightTakeoffSharpIcon />
          <Link to="/departure">departure</Link>
        </button>
        <button className={`btn conteiner__btn-arrival${arrivalClass}`}>
          <FlightLandSharpIcon />
          <Link to="/arrivel">arrivel</Link>
        </button>
      </div>
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

        <Switch>
          <Route path="/arrivel">
            <Arrival scoreboardList={scoreboardList} allFlights={allFlights}/>
          </Route>
          <Route path="/departure">
            <Departure
              scoreboardList={scoreboardList}
              value={value}
            />
          </Route>
        </Switch>
      </table>
    </div>
  );
};

export default Main;
