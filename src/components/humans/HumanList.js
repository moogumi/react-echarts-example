import React from 'react'
import { Link } from 'react-router-dom';
import PageTitle from '../layout/PageTitle';
import { connect } from 'react-redux';
import './HumanList.css';

const HumanList = ({humans}) => {   
    
    const humanList = humans.map(human => {
        return (
            <Link to={'/human/' + human.id} className="collection-item valign-wrapper" key={human.id}>
                <div className="row">
                    <div className="col s4">
                        { human.firstName }                
                    </div>
                    <div className="col s4">
                        { human.lastName}                
                    </div>
                    <div className="col s4 right-align">
                        { human.age } y.o.                
                    </div>
                </div>                
            </Link>
        )
    })
    
    return (
        <div className="container">
            <PageTitle pageTitle={"Human List"} />
                                    
            <div className="collection">                                    
            <a className="collection-item active light-green valign-wrapper">
                <div className="row">
                    <div className="col s4 white-text">
                        First Name
                    </div>
                    <div className="col s4 white-text">
                        Last Name
                    </div>
                    <div className="col s4 white-text right-align">
                        Age
                    </div>
                </div>
            </a>                
            { humanList }                 
            </div>             
        </div>
    )    
}


const mapStateToProps = (state) => {            
    return {                
        humans: state.humans.list
    }
}

export default  connect(mapStateToProps)(HumanList);