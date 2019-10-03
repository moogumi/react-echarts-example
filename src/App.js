import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import HumanList from './components/humans/HumanList';
import PopulationChart from './components/charts/PopulationChart';
import AddHuman from './components/humans/AddHuman';
import HumanSummary from './components/humans/HumanSummary';
import Footer from './components/layout/Footer';
import _404 from './components/errorPages/_404';
import _500 from './components/errorPages/_500';

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div className="App flow-text">          
          <Navbar />          
          <Switch>
            <Route exact path="/" component = { HumanList }></Route>                        
            <Route path="/add" component = { AddHuman }></Route>                        
            <Route path="/human/:id" component = { HumanSummary }></Route>
            <Route path="/chart" component = { PopulationChart }></Route>
            <Route path="*" component={ _404 }/>
          </Switch>          
          <Footer />
        </div>  
      </BrowserRouter>
    )
  }
}

export default App;