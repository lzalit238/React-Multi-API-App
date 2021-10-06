import React from 'react'
import ParksCards from './Components/ParksCards';

function App() {
  const axios = require('axios').default
    axios.get('https://developer.nps.gov/api/v1/parks?&api_key=vcEt1EQ8P1p32S4YDuRlHUhUFtuNvYyew2t2xnnJ').then((response) => {
      console.log(response);
    }).catch((error) => {
    console.log(error)
  })

  return (
    <div className="App">
      <h1>Welcome!</h1>
      <h3>Basic React Template</h3>
      <ParksCards />
    </div>
  );
}

export default App;
