import { createSelector } from "reselect";

export const airoportBoardListSelector = (state) =>
  state.scoreBoardList.scoreBoardList.body;

export const aravivalFlightNumber = createSelector(
  [airoportBoardListSelector],
  (elements) => {
    if (elements === "") return "";
    return elements.arrival.map((elem) => elem.codeShareData[0].codeShare);
  }
);
