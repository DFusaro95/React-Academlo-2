 import React from 'react'
 import './CountryInfo.css'

 const CountryInfo = ({country}) => {
   return (
    <div className='country__container animate__animated animate__fadeIn'>
      <h1 className="country__name animate__animated animate__backInDown">The Whished One: {` ${country?.name.common}`}</h1>
      <p className="country__description animate__animated animate__backInDown">Portugal is the first country in my "Wished Ones to live" list (followed by New Zealand) because of its views, its complex terrain and similar wheather to Argentina (8°C to 29°C).. it has mountains, rivers, a full lenght beach, castles, everything in such a small country. The income and the living costs are very balanced, even when Portugal isn't in the top-tier of the Europe's average income category, but as a developer that's not a problem for me.
      <br></br>
      <br></br>
      The society is pretty calm and it's a country that don't have a lot of night, is a kind of 'chill' place to be, and that is the thing that made me fall for it.</p>
      <h2 className="flag__description animate__animated animate__backInDown">The Flag of Portugal</h2>
      <img className='country__flag animate__animated animate__backInDown' src={country?.flags.svg} alt="Portugal Flag" />
    </div>
   )
}

 export default CountryInfo