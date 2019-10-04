const initState = {
    humanChart: [],
    humanChartError: false
}

const chartReducer = (state = initState, action) => {
    switch (action.type) {
        case "HUMAN_CHART_SUCCESS":
            return { ...state, humanChart: [...action.humanChart], humanChartError: false };
        case "HUMAN_CHART_ERROR":
            return { ...state, humanChartError: true };
        default:
            return state;
    }
}

export default chartReducer;