import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router'
import './HumanSummary.css'
import PageTitle from '../layout/PageTitle'
import { getHumanByIdUrl } from '../../api/apiHuman';
import axios from 'axios';

/*

For demonstration purposes this component is created using React Hooks. 
The whole app can be created in such manner, as well as this component can be 
rewritten to use Redux

*/

const HumanSummary = (props) => {

    const [error, setError] = useState(false);
    const [human, setHuman] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(getHumanByIdUrl(props.match.params.id));
            setHuman(result.data.data);
        }
        fetchData().catch((err) => {
            return setError(err);
        });
    }, [props.match.params.id]);

    if (error) {
        return <Redirect to='/_404' />
    }

    return (
        <div className="container flow-text">
            <PageTitle pageTitle={"Human Summary"} />

            <div className="row">
                <div className="col s2 right-align">First Name: </div>
                <div className="col s10 human-details">{human.firstName} </div>
            </div>
            <div className="row">
                <div className="col s2 right-align">Last Name: </div>
                <div className="col s10 human-details">{human.lastName} </div>
            </div>
            <div className="row">
                <div className="col s2 right-align">Age: </div>
                <div className="col s10 human-details">{human.age}  y.o. </div>
            </div>
        </div>
    )
}


export default HumanSummary;