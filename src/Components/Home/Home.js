import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Country from '../Country/Country';

const Home = () => {
    const [country, setCountry] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountry(data))
    });
    const first10 = country.slice(0, 10);
    return (
        <div>
            <h1>Country Data: {first10.length}</h1>
            {
                first10.map(country => <Country country={country}></Country>)
            }
        </div>
    );
};

export default Home;