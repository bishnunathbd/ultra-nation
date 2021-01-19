import './App.css';
import { useEffect, useState } from 'react';
import Country from './components/Country/Country';
import AddedCountry from './components/AddedCountry/AddedCountry';

function App() {
  const [countries, setCountries] = useState([]);
  const [addedCountry, setAddedCountry] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(res => res.json())
      .then(data => setCountries(data))
      .catch(err => console.log(err))
  }, [])

  const handleAddedCountry = (country) => {
    const newAddedCountry = [...addedCountry, country];
    setAddedCountry(newAddedCountry);
  }

  return (
    <div className="App">
      <h3>Loaded Countries: {countries.length}</h3>
      <p>Country Added: {addedCountry.length}</p>
      
      <AddedCountry addedCountry={addedCountry}></AddedCountry>

      {
        countries.map(country => <Country country={country} handleAddedCountry={handleAddedCountry} key={country.alpha3Code}></Country>)
      }
    </div>
  );
}

export default App;
