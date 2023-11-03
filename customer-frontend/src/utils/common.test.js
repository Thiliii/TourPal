import moment from "moment";
import { getTimePassed } from "./common";

describe("Test getTimePassed()", () => {
  it('Should return "Just Now" when time difference is less than a min', async () => {
    const result = getTimePassed(moment().subtract(1, "seconds").toISOString());
    expect(result).toBe("Just now");
  });

  it('Should return "1 minute ago" when time difference is between 1 min and 2 mins', async () => {
    const result = getTimePassed(moment().subtract(1, "minutes").toISOString());
    expect(result).toBe("1 minute ago");
  });

  it('Should return "x minutes ago" when time difference is greater or equal to 2 mins', async () => {
    const result = getTimePassed(moment().subtract(2, "minutes").toISOString());
    expect(result).toBe("2 minutes ago");
  });

  it('Should return "1 hour ago" when time difference is between 1 hour and 2 hours', async () => {
    const result = getTimePassed(moment().subtract(1, "hours").toISOString());
    expect(result).toBe("1 hour ago");
  });

  it('Should return "x hours ago" when time difference is greater or equal to 2 hours', async () => {
    const result = getTimePassed(moment().subtract(2, "hours").toISOString());
    expect(result).toBe("2 hours ago");
  });

  it('Should return "1 day ago" when time difference is between 1 day and 2 days', async () => {
    const result = getTimePassed(moment().subtract(1, "days").toISOString());
    expect(result).toBe("1 day ago");
  });

  it('Should return "x days ago" when time difference is greater or equal to 2 days', async () => {
    const result = getTimePassed(moment().subtract(2, "days").toISOString());
    expect(result).toBe("2 days ago");
  });

  it('Should return "1 year ago" when time difference is between 1 day and 2 years', async () => {
    const result = getTimePassed(moment().subtract(1, "years").toISOString());
    expect(result).toBe("1 year 0 day ago");
  });

  it('Should return "x years ago" when time difference is greater or equal to 2 years', async () => {
    const result = getTimePassed(moment().subtract(2, "years").toISOString());
    expect(result).toBe("2 years 0 day ago");
  });
});
