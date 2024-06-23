const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const getTime = (time) => {
  const now = new Date();
  const date = new Date(time);
  if (now.getTime() - date.getTime() < 24 * 60 * 60 * 1000) {
    return `${date.getHours()}:${date.getMinutes()}`;
  }
  if (now.getTime() - date.getTime() < 7 * 24 * 60 * 60 * 1000) {
    return `${days[date.getDay()]}`;
  }
  if (now.getFullYear === date.getFullYear()) {
    return `${month[date.getMonth()]}`;
  }
  return `${date.getDay()}${date.getMonth()}${date.getFullYear()}`;
};
