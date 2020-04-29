import { fetchFligth } from "../gateways/gateway";

export const SCOREBOARD_LIST_RECIVED = "BOARD_LIST_RECIVED";
export const GET_FLIGHT = "GET_FLIGHT"


export const boardListRecived = (scoreBoardList) => {
  const action = {
    type: SCOREBOARD_LIST_RECIVED,
    payload: {
      scoreBoardList,
    },
  };
  return action;
};
export const getFlight = (flightNumber) => {
  const action = {
    type: GET_FLIGHT,
    payload: {
      flightNumber,
    },
  };
  return action;
};


export const getBoardList = () => {
  const thunkAction = function (dispatch) {
    fetchFligth().then((scoreboardList) =>{
    return dispatch(boardListRecived(scoreboardList))});
  };
  return thunkAction;
};



