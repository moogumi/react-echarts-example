import React from 'react';
import { Link } from 'react-router-dom';

const _404 = () => (

    <div className="container ">        
        <h1 className="light-green-text center-align" >
            Error 404
        </h1>
        <h5 className="center-align light-gray-text">
            Woops. Looks like this page doesn't exists
        </h5>
        <center><Link to="/" className="light-green-text">Back to List</Link></center>
    </div>
);
export default _404;