import axios from "axios";

const URL = "https://covid19.mathdro.id/api";

export const fetcher = async () => {
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(URL);
    return { confirmed, recovered, deaths, lastUpdate };
  } catch (e) {
    console.log(e);
  }
};

export const DailyData = async () => {
  try {
    const { data } = await axios.get(`${URL}/daily`);
    console.log(data)
   } catch (e) {
    console.log(e);
  }
};
