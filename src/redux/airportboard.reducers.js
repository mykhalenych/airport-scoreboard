import { SCOREBOARD_LIST_RECIVED } from "./airportboard.action";

const initialState = {
  scoreBoardList: [],
};

const boardReducer = (state = initialState, action) => {
  switch (action.type) {
    case SCOREBOARD_LIST_RECIVED:
      return {
        ...state,
        scoreBoardList: action.payload.scoreBoardList,
      };
    default:
      return state;
  }
};

export default boardReducer;
