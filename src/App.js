import React, { useEffect } from "react";
import Main from "./components/Main";
import { airoportBoardListSelector } from "./redux/airportboard.selectors";
import * as actions from "./redux/airportboard.action";
import { connect } from "react-redux";
import { Route } from "react-router-dom";

const App = ({ getScoreBoardList, scoreboardList }) => {
  useEffect(() => {
    getScoreBoardList();
  }, []);
  //Route params
  return (
    <Route path="/:direction?/">
      <Main scoreboardList={scoreboardList} />
    </Route>
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
