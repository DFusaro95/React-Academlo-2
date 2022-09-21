
import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import CountryInfo from './components/CountryInfo'

function App() {
  
  const [country, setCoutry] = useState()

  useEffect(() => {
    const URL = 'https://restcountries.com/v3.1/name/portugal'

    axios.get(URL)
      .then( res => setCoutry(res.data[0]))
      .catch( err => console.log(err))
  }, [])


  return (
    <div className="App">
      <CountryInfo country={country}/>
    </div>
  )
}

export default App
