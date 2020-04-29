import { SCOREBOARD_LIST_RECIVED, GET_FLIGHT } from "./airportboard.action";

const initialState = {
  scoreBoardList: [],
  flightNumber: 0,
};

const boardReducer = (state = initialState, action) => {
  switch (action.type) {
    case SCOREBOARD_LIST_RECIVED:
      return {
        ...state,
        scoreBoardList: action.payload.scoreBoardList,
      };
    case GET_FLIGHT:
      return {
        ...state,
        flightNumber: action.payload.flightNumber,
      };
    default:
      return state;
  }
};

export default boardReducer;
