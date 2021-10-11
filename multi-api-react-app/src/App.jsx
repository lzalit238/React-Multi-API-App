import React,{useState, useEffect} from 'react'
import ParksCards from './Components/ParksCards';
import './Styles/main.css'

function App() {
  const [parks, setParks] = useState([]);

  useEffect(() => {
    getData();

    async function getData() {
      const response = await fetch('https://developer.nps.gov/api/v1/parks?&api_key=vcEt1EQ8P1p32S4YDuRlHUhUFtuNvYyew2t2xnnJ');
      const data = await response.json();

      setParks(data);
    }
  }, []);

  // const axios = require('axios').default
  //   axios.get('https://developer.nps.gov/api/v1/parks?&api_key=vcEt1EQ8P1p32S4YDuRlHUhUFtuNvYyew2t2xnnJ').then((response) => {
  //     console.log(response);
  //     const list = response.json();
  //     setParks(list);
  //     console.log(parks);
  //   }).catch((error) => {
  //   console.log(error)
  //   })//call api
  
  

  return (
    <div className="App">
      <h1 className='title'>Parks to Explore!</h1>
      {parks.map((parks, id) => (
        <div key={id}>
          <h2>{parks.fullName}</h2>
        </div>
      )
      )}
    </div>
  );
}

export default App;
