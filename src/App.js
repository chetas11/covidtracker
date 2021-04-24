import './App.css';
import Cards from './Components/Cards'
import Charts from "./Components/Chart";
import CountryPicker from './Components/CountryPicker';

function App() {
  return (
    <div className="container">
      <Cards />
      <CountryPicker />
      <Charts />
    </div>
  );
}

export default App;
