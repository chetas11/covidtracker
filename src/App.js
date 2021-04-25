import "./App.css";
import { useEffect, useState } from "react";
import Cards from "./Components/Cards";
import Charts from "./Components/Chart";
import CountryPicker from "./Components/CountryPicker";
import { fetcher } from "./api";

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchAPI = async () => {
      setData(await fetcher());
    };

    fetchAPI();
  }, []);

  const handleCountryChange = async (country) => {
    const fetchData = await fetcher(country);
    fetchData.country = country;
    setData(fetchData);
  };

  console.log(data);

  return (
    <div className="container">
      <Cards data={data} />
      <CountryPicker handleCountryChange={handleCountryChange} />
      <Charts data={data} />
    </div>
  );
}

export default App;
