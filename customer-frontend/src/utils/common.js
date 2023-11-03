export const getStrigifiedStringArrayItems = (arr) => {
  if (!Array.isArray(arr)) return "";
  return arr.map((item) => item).join(", ");
};

export const getTimePassed = (time) => {
  if (!time) return "";
  console.log(time);
  const currentDate = new Date();
  const pastDate = new Date(time);

  const timeDiff = currentDate.getTime() - pastDate.getTime();
  const minuteDiff = Math.floor(timeDiff / (1000 * 60));
  const hourDiff = Math.floor(timeDiff / (1000 * 60 * 60));
  const dayDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  const yearDiff = Math.floor(dayDiff / 365);

  if (minuteDiff < 1) {
    return "Just now";
  } else if (minuteDiff < 60) {
    return `${minuteDiff} minute${minuteDiff > 1 ? "s" : ""} ago`;
  } else if (hourDiff < 24) {
    return `${hourDiff} hour${hourDiff > 1 ? "s" : ""} ago`;
  } else if (dayDiff < 365) {
    return `${dayDiff} day${dayDiff > 1 ? "s" : ""} ago`;
  } else {
    return `${yearDiff} year${yearDiff > 1 ? "s" : ""} ${dayDiff % 365} day${
      dayDiff % 365 > 1 ? "s" : ""
    } ago`;
  }
};

export const covertToKm = (meters) => {
  if (!meters) return "";
  return Math.round(meters / 1000);
};
