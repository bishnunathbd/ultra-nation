import React from 'react';

const Country = (props) => {
  const {name, flag, population, region} = props.country;

  const countryStyle = {border: '1px solid red', margin: '10px', padding: '10px'};
  
  return (
    <div style={countryStyle}>
      <h4>This is {name}</h4>
      <img src={flag} style={{height: '50px'}} alt=""/>
      <p>Population: {population}</p>
      <p>Region: {region}</p>
      <button onClick={() => props.handleAddedCountry(props.country)}>Add Country</button>
    </div>
  );
};

export default Country;