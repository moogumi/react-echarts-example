import React from 'react'
import HumanAgeGroups from './HumanAgeGroups';
import UnknownChart from './UnknownChart';
import { HUMAN_AGE_GROUPS_CHART }from './utils/chartTypes'

const Statistics = ({ chartType }) => {
    return (
        chartType == HUMAN_AGE_GROUPS_CHART ? <HumanAgeGroups /> : <UnknownChart/>            
    )
}

export default Statistics
