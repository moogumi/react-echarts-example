import React, { Component } from 'react';
import { addHuman } from '../../store/actions/addHuman';
import { connect } from 'react-redux';
import PageTitle from '../layout/PageTitle';

class Human extends Component {
    
    state = {
        firstName : '',
        lastName: '',
        age : 0
    }
    
    handleChange = (e) => {        
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSumbit = (e) => {        
        e.preventDefault();        
        this.props.addHuman(this.state);
        this.props.history.push('/');
    }

    render() {
        return (
            <div className="container">
            <PageTitle pageTitle={"Add Human"} />
                <form onSubmit={this.handleSumbit} className="white">                    
                    <div className="input-field">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" required id="firstName" onChange={this.handleChange} autocomplete="nope"/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" required id="lastName" onChange={this.handleChange} autocomplete="nope"/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="age">Age</label>
                        <input type="number" required id="age" min="1" max="150" step="1" onChange={this.handleChange} autocomplete="nope"/>
                    </div>
                    <div className="input-field">
                        <button className="btn light-green z-depth-0">Add</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addHuman: (human) => dispatch(addHuman(human))
    }
}

export default connect(null, mapDispatchToProps)(Human)