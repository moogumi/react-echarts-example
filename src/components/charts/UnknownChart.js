import React from 'react';
import { Link } from 'react-router-dom';

const UnknownChart = () => (

    <div className="container ">
        <h1 className="red-text center-align" >
            Unknown Chart requested
        </h1>
        <h5 className="center-align light-gray-text">
            Woops. Try to make another choice
        </h5>
        <center><Link to="/" className="light-green-text">Back to List</Link></center>
    </div>
);
export default UnknownChart;