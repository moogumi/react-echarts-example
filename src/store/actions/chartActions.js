import axios from 'axios';
import { getHumanChartUrl } from '../../api/apiHuman';

export const getHumanChart = (chartType) => {
    return (dispatch, getState) => {

        axios.post(getHumanChartUrl(),
            {
                chartType
            })
            .then((response) => {
                return dispatch({ type: 'HUMAN_CHART_SUCCESS', humanChart: response.data.data });
            }).catch((error) => {
                return dispatch({ type: 'HUMAN_CHART_ERROR', humanChartError: true });
            });
    }
}