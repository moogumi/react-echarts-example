import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';
import { Link } from 'react-router-dom';
import PageTitle from '../layout/PageTitle';
import { getHumanListUrl } from '../../api/apiHuman';
import axios from 'axios';
import { connect } from 'react-redux';
import { Redirect } from 'react-router'
import { getHumanChart } from '../../store/actions/chartActions';
import { getChartOptions, compareAge, getChartData } from './utils/chartOptions';
import PropTypes from 'prop-types';

class PopulationChart extends Component {        

    componentDidMount() {          
        this.props.getHumanChart();
    }                  

    render (){
      
        const { humanChart, humanChartError } = this.props;    
        const data = getChartData(humanChart);            
        const options = getChartOptions(data[0], data[1]);

        if (humanChartError) {                      
          return <Redirect to='/error' />
        }
        return (
          <div className="container"> 
            <PageTitle pageTitle={"Population Chart"} />
            <ReactEcharts option={options} />
          </div> 
        )    
    }
}

PopulationChart.propTypes = {
    humanChart: PropTypes.array.isRequired,
    humanChartError: PropTypes.bool.isRequired
}

const mapStateToProps = (state) => {                    
    const { humanChart, humanChartError } = state.chart;
    return {                
        humanChart,
        humanChartError        
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
      getHumanChart: (human) => dispatch(getHumanChart())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PopulationChart);