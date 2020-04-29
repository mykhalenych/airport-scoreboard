import moment from "moment";

const baseUrl = "https://api.iev.aero/api/flights";
const date = moment(new Date()).format("DD-MM-YYYY");

export const fetchFligth = () => {
  return fetch(`${baseUrl}/${date}`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((boardList) => {
      return boardList;
    });
};


export const searchFlight = () => {
  return fetch(`${baseUrl}/${date}/`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((boardList) => {
      return boardList;
    });
};