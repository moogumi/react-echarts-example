import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageTitle from '../layout/PageTitle';
import './HumanList.css';
import { getHumanListUrl } from '../../api/apiHuman';
import axios from 'axios';
import { connect } from 'react-redux';

const HumanList = ({humanList}) => {
    
    const [humans, setHumans] = useState([]);
    
    useEffect(() => {        
        const fetchData = async () => {            
            const result = await axios.get(getHumanListUrl());       
            setHumans(result.data.data);            
        }
        fetchData();
    }, [humanList]);
  
    const humanCollection = humans && humans.map(human => {
        return (
            <Link to={'/human/' + human.id} className="collection-item" key={human.id}>
                <div className="row">
                    <div className="col s5">
                        { human.firstName }                
                    </div>
                    <div className="col s5">
                        { human.lastName}                
                    </div>
                    <div className="col s2 right-align">
                        { human.age } y.o.                
                    </div>
                </div>                
            </Link>
        )
    })
    return (      
    <div className="container">
            <PageTitle pageTitle={"Person List"} />            
            <div className="collection-header">
                <div className="row flow-text">
                    <div className="col s5 collection-header-item">
                        First Name
                    </div>
                    <div className="col s5 collection-header-item">
                        Last Name
                    </div>
                    <div className="col s2 collection-header-item-last">
                        Age
                    </div>
                </div>
            </div>                            
            <div className="collection">                                    
            { humanCollection }                 
            </div>             
        </div>
    );
};

const mapStateToProps = (state) => {            
    return {                
        humanList: state.humans.list
    }
}

export default connect(mapStateToProps)(HumanList)