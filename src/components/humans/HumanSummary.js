import React from 'react'
import { Redirect } from 'react-router'
import { connect } from 'react-redux';
import './HumanSummary.css'
import PageTitle from '../layout/PageTitle'

const HumanSummary = (props) => {

    const { human } = props;
    
    if (!human){
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


const mapStateToProps = (state, ownProps) => {            
    console.log(state);
    return {                
        human: state.humans.list.find(human => {return human.id === ownProps.match.params.id})
    }
}

export default  connect(mapStateToProps)(HumanSummary);