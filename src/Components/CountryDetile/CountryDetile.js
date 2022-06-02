import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

const CountryDetile = () => {
    const {countryId} = useParams();
    const [country, setCountry] = useState([]);
    useEffect(() => {
        const url = `https://restcountries.com/v3.1/name/${countryId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setCountry(data))
    }, []);
    console.log(country);
    return (
        <div>
            <h1>Detile Page: {countryId}</h1>
        </div>
    );
};

export default CountryDetile;