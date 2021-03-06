import React, { useState, useEffect } from "react";
import SearchSharpIcon from "@material-ui/icons/SearchSharp";
import { Link } from "react-router-dom";
import { useHistory, useLocation, useParams } from "react-router-dom";

const Header = () => {
  const [searchValue, setValue] = useState("");
  let history = useHistory();
  let location = useLocation();
  const { flight, direction } = useParams();
  useEffect(() => {
    if (searchValue) {
      history.push(`${location.pathname}/${searchValue}`);
      setValue('');

    }
    if (flight) {setValue(flight)
      setValue("");
    };
  }, [direction]);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <section className="scoreboard">
      <h2 className="scoreboard__title">SEARCH FLIGHT</h2>
      <form className="scoreboard__form">
        <div className="scoreboard__form">
          <input
            className="scoreboard__form-search"
            value={searchValue}
            onChange={onChange}
            name="input"
            placeholder="Write flight number"
          />
          <SearchSharpIcon className="scoreboard__form-icon" />
        </div>
        <button className="scoreboard__form-submit" type="submit">
          <Link to={`/departure?search=${searchValue}`}>Search</Link>
        </button>
      </form>
    </section>
  );
};

export default Header;
