import axios from "axios";

const URL = "https://covid19.mathdro.id/api";

export const fetcher = async (country) => {
  let changedURL = URL;

  if(country){
    changedURL = `${URL}/countries/${country}`
  }

  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(changedURL);
    return { confirmed, recovered, deaths, lastUpdate };
  } catch (e) {
    console.log(e);
  }
};

export const DailyData = async () => {
  try {
    const { data } = await axios.get(`${URL}/daily`);
    const modifiedData = data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate,
    }));

    return modifiedData;
  } catch (e) {
    console.log(e);
  }
};

export const Countries = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${URL}/countries`);
    return countries.map((country) => country.name);
  } catch (e) {
    console.log(e);
  }
};
