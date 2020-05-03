export const airoportBoardListSelector = (state) =>
  state.scoreBoardList.scoreBoardList.body;

export const flightListSelector = (state) => state.flightNumber.flightNumber;

export const getTime = (date) => {
  return `${date.split("T")[0].split(":")} ${
    date.split("T")[1].split(":")[0]
  }:${date.split("T")[1].split(":")[1]}`;
};
