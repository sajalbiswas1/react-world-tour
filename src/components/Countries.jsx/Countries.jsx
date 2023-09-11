import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/country";
import './countries.css'

const Countries = () => {

    const [countries, setCountries] = useState([])
    const [visiteCountery, setVisiteCountry] = useState([])
    const [visiteFlags, setVisiteFlags] = useState([])


    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])

    const handelVisiteCountry = (country)=>{
        console.log(country)
        const visiteCountrySet = [...visiteCountery, country]
        setVisiteCountry(visiteCountrySet)
    }

    const handelVisiteFlags = flags =>{
       const newVisiteFlags = [...visiteFlags, flags];
       setVisiteFlags(newVisiteFlags);
    }

    return (
        <div>
            <h3>Counties {countries.length}</h3>
            <div>
                <h4>Visite Country: {visiteCountery.length}</h4>
                <ul>
                    {visiteCountery.map(country =><li key={country.cca3}>{country.name.common}</li>)}
                </ul>
            </div>
            <div className="div-container">
                {
                    visiteFlags.map((flags,idx) =><img key={idx} src={flags}></img>)
                }
            </div>
            <div className="country-container">
            {
                countries.map(country => <Country 
                    key={country.cca3} 
                    handelVisiteCountry={handelVisiteCountry}
                    handelVisiteFlags={handelVisiteFlags}
                    country={country}></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;