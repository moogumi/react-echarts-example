import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PageTitle from '../layout/PageTitle';
import './HumanList.css';
import { getHumanListUrl } from '../../api/apiHuman';
import axios from 'axios';
import { connect } from 'react-redux';
import { Redirect } from 'react-router'
import { getHumanList } from '../../store/actions/humanActions';
import PropTypes from 'prop-types';

class HumanList extends Component {        

    componentDidMount() {          
        this.props.getHumanList();
    }       

    render() {
        const { humanList, humanListError } = this.props;

        if (humanListError) {               
            return <Redirect to='/_500' />
        }

        const humanCollection = humanList && humanList.map(human => {
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
    }        
};

HumanList.propTypes = {
    humanList: PropTypes.array.isRequired,
    humanListError: PropTypes.bool.isRequired
}

const mapStateToProps = (state) => {                    
    const { humanList, humanListError } = state.humans;
    return {                
        humanList,
        humanListError        
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getHumanList: (human) => dispatch(getHumanList())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HumanList)
