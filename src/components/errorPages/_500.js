import React from 'react';
import { Link } from 'react-router-dom';

const _500 = () => (

    <div className="container ">        
        <h1 className="red-text center-align" >
            Internal Server Error (500)
        </h1>
        <h5 className="center-align light-gray-text">
            Please contact the administrator
        </h5>
        <center><Link to="/" className="light-green-text">Back to List</Link></center>
    </div>
);
export default _500;