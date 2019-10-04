import axios from 'axios';
import { getHumanChartUrl } from '../../api/apiHuman';

export const getHumanChart = () => {
    return (dispatch, getState) => {                         
        axios.get(getHumanChartUrl())
        .then((response) => {                                     
            return dispatch({type: 'HUMAN_CHART_SUCCESS', humanChart: response.data.data});            
        }).catch((error) => {                                                   
            return dispatch({type: 'HUMAN_CHART_ERROR', humanChartError: true });            
        });        
    }
}