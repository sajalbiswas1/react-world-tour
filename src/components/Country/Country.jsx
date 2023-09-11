import { useState } from 'react';
import '../Country/country.css'
const Country = ({ country, handelVisiteCountry, handelVisiteFlags}) => {
    const { name, flags, population, area, cca3 } = country;

    const [visited, setVisited] = useState(false)

    const handelButton = () => {
        setVisited(!visited)
    }

    return (
        <div className={`country ${visited ? 'visited' : 'non-visited'}`}>
            <h3 style={{ color: visited ? 'green' : 'black' }}>Name: {name?.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p><small>Code: {cca3}</small></p>
            <button onClick={()=>handelVisiteCountry(country)}>Visite this</button>
            <br />
            <button onClick={()=>handelVisiteFlags(flags.png)}>Add Flags</button>
            <br />
            <br />
            <button onClick={handelButton}>{visited ? 'Visited' : 'Going'}</button>
            {visited ? 'I am visited' : 'I am not visited'}
        </div>
    );
};

export default Country;