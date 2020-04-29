import React, { useState, useEffect } from "react";
import {
  useHistory,
  useLocation,
  useParams,
  Route,
  Link,
  Switch,
} from "react-router-dom";
import Arrival from "./Arrival";
import Departure from "./Departure";
import "./main.scss";

const Main = ({ scoreboardList }) => {
  const [value, setValue] = useState("");
  const [directionFlight, SetFlight] = useState("");

  let history = useHistory();
  let location = useLocation();
  const { flight, direction } = useParams();

  useEffect(() => {
    if (value) {
      history.push(`${location.pathname}/${value}`);
    }
  }, [direction]);

  const onChange = (event) => {
    setValue(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    if (flight && value) {
      return;
    }

    value
      ? history.push(`${location.pathname}/${value}`)
      : history.push(`/${direction}`);
  };
  const onAarival = () => {
    SetFlight("arrivel");
  };
  const onDeparture = () => {
    SetFlight("departure");
  };

  return (
    <div className="wrap">
      <section className="scoreboard">
        <h2 className="scoreboard__title">Пошук Рейсу</h2>
        <form onSubmit={handleSubmit} className="scoreboard__form">
          <label>
            
            <input
              className="scoreboard__form-search"
              defaultValue={"Номер рейсу або місто"}
              value={value}
              onChange={onChange}
              name="input"
            />
          </label>
          <button className="scoreboard__form-submit" type="submit">
            Пошук
          </button>
        </form>
      </section>
      <div className="conteiner">
        <button className="conteiner__arrivel-btn">
          <Link to="/arrivel" onClick={onAarival}>
            arrivel
          </Link>
        </button>
        <button className="conteiner__departure-btn">
          <Link to="/departure" onClick={onDeparture}>
            departure
          </Link>
        </button>
      </div>
      <Switch>
        <Route path="/arrivel">
          <Arrival scoreboardList={scoreboardList} />
        </Route>
        <Route path="/departure">
          <Departure scoreboardList={scoreboardList} />
        </Route>
      </Switch>
    </div>
  );
};

export default Main;
