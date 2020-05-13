export const getTime = (date) => {
  return `${date.split("T")[0].split(":")} ${
    date.split("T")[1].split(":")[0]
  }:${date.split("T")[1].split(":")[1]}`;
};
