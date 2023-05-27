export const formattedDate = (date = new Date()) => {
  const months = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];
  const year = date.getFullYear();
  const month = months[date.getMonth()];
  const day = ("0" + date.getDate()).slice(-2);
  return `${year}-${month}-${day}`;
};
