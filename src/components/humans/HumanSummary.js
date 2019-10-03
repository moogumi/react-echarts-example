import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router'
import './HumanSummary.css'
import PageTitle from '../layout/PageTitle'
import { getHumanByIdUrl } from '../../api/apiHuman';
import axios from 'axios';

const HumanSummary = ( props ) => {
        
    const [error, setErrors] = useState(false);
    const [human, setHuman] = useState({});
    
    useEffect(() => {
        const fetchData = async () => {
        const result = axios(getHumanByIdUrl(props.match.params.id))
            .then(response => { 
                console.log(response);
                setHuman(response.data.data)}
            )
            .catch(error => {
                setErrors(error)            
            });

        }
        
        fetchData();
    }, []);        

    if (error){
        return <Redirect to='/_404' />
    }

    return (        
        <div className = "container flow-text">
        <PageTitle pageTitle={"Human Summary"} />

        <div className="row">
            <div className="col s2 right-align">First Name: </div>
            <div className="col s10 human-details">{ human.firstName } </div>
        </div>
        <div className="row">
            <div className="col s2 right-align">Last Name: </div>
            <div className="col s10 human-details">{ human.lastName } </div>
        </div>
        <div className="row">
            <div className="col s2 right-align">Age: </div>
            <div className="col s10 human-details">{ human.age }  y.o. </div>
        </div>
        </div>
    )    
}


export default  HumanSummary;