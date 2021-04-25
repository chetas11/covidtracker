import "./App.css";
import { useEffect, useState } from "react";
import Cards from "./Components/Cards";
import Charts from "./Components/Chart";
import CountryPicker from "./Components/CountryPicker";
import { fetcher } from "./api";


function App() {

  const [data, setData] = useState({});


  useEffect(async () => {
    const NewData = await fetcher();
    setData(NewData)
  }, []);

  


  return (
    <div className="container">
      <Cards data={data} />
      <CountryPicker />
      <Charts />
    </div>
  );
}

export default App;
