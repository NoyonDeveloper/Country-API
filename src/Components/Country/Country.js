import React from 'react';
import { Link } from 'react-router-dom';

const Country = (props) => {
    const countryStyle = {
        border: "1px solid blue",
        textAlign: "center",
        margin: "10px"
    }
    console.log(props.country);
    return (
        <div style={countryStyle}>
            <img style={{width:"100px", height: "auto", margin:"10px"}} src={props.country.flags.png} alt="" />
            <h5><small>Country Name: </small> {props.country.name.common}</h5>
            <p>Fifa: {props.country.fifa}</p>
            <p>Region: {props.country.region}</p>
            <p>Time Zone: {props.country.timezones}</p>
            <p>Continents: {props.country.continents}</p>
            <Link to={`/country/${props.country.name.common}`}><p>Country Detilse {props.country.name.common}</p></Link>
        </div>
    );
};

export default Country;