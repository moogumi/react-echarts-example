import React from 'react';
import { Link } from 'react-router-dom';

const UnknownError = () => (

    <div className="container ">        
        <h1 className="red-text center-align" >
            Unexpected error
        </h1>
        <h5 className="center-align light-gray-text">
            Woops. Something bad happend. Please, contact the administrator
        </h5>
        <center><Link to="/" className="light-green-text">Back to List</Link></center>
    </div>
);
export default UnknownError;