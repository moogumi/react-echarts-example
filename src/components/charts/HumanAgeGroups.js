import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';
import PageTitle from '../layout/PageTitle';
import { connect } from 'react-redux';
import { Redirect } from 'react-router'
import { getHumanChart } from '../../store/actions/chartActions';
import { getHumanAgeGroupChartOptions, getHumanAgeGroupChartData } from './utils/humanAgeGroupChartOptions';
import PropTypes from 'prop-types';
import { HUMAN_AGE_GROUPS_CHART } from './utils/chartTypes';

class HumanAgeGroups extends Component {

  componentDidMount() {
    this.props.getHumanChart(HUMAN_AGE_GROUPS_CHART);
  }

  render() {
    const { humanChart, humanChartError } = this.props;
    const data = getHumanAgeGroupChartData(humanChart);
    const options = getHumanAgeGroupChartOptions(data[0], data[1]);

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

HumanAgeGroups.propTypes = {
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
    getHumanChart: (type) => dispatch(getHumanChart(type))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HumanAgeGroups);