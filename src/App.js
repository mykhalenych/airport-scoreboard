import React, { useEffect } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main";
import { airoportBoardListSelector } from "./redux/airportboard.selectors";
import * as actions from "./redux/airportboard.action";
import { connect } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const App = ({ getScoreBoardList, scoreboardList }) => {
  useEffect(() => {
    getScoreBoardList();
  }, []);
  console.log(scoreboardList)
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/:direction?/:flight?">
            <Main scoreboardList={scoreboardList} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
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

export default connect(mapState, mapDispatch)(App);
