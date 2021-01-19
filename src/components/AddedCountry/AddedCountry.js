import React from 'react';

const AddedCountry = (props) => {
  const addedCountry = props.addedCountry;

  // let population = 0;
  // for (let i = 0; i < addedCountry.length; i++) {
  //   const country = addedCountry[i];
  //   population = population + country.population;
  // }
  const population = addedCountry.reduce((sum, country) => sum + country.population, 0);

  return (
    <div style={{border: '2px solid green'}}>
      <h2>Added Country Component</h2>
      <h3>Total Population: {population}</h3>
    </div>
  );
};

export default AddedCountry;