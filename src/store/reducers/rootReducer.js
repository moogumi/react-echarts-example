import humanReducer from './humanReducer';
import chartReducer from './chartReducer';

import { combineReducers } from 'redux';

const rootReducer = (combineReducers(
    {
        humans: humanReducer,
        chart: chartReducer
    }
))

export default rootReducer;

