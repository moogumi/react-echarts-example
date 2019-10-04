import axios from 'axios';
import { createHumanUrl, getHumanListUrl, getHumanByIdUrl } from '../../api/apiHuman';

export const addHuman = (human) => {
    return (dispatch, getState) => {
        axios.post(createHumanUrl(),
            {
                firstName: human.firstName,
                lastName: human.lastName,
                age: parseInt(human.age, 10)
            }).then((response) => {
                return dispatch({ type: 'HUMAN_ADD_SUCCESS', human: response.data.data });
            }).catch((error) => {
                return dispatch({ type: 'HUMAN_ADD_ERROR', humanAddError: true });
            });
    }
}

export const getHumanList = () => {
    return (dispatch, getState) => {
        axios.get(getHumanListUrl())
            .then((response) => {
                return dispatch({ type: 'HUMAN_LIST_SUCCESS', humanList: response.data.data });
            }).catch((error) => {
                console.log(error);
                return dispatch({ type: 'HUMAN_LIST_ERROR', humanListError: true });
            });
    }
}

export const getHumanById = (id) => {
    return (dispatch, getState) => {
        axios.get(getHumanByIdUrl(id))
            .then((response) => {
                return dispatch({ type: 'HUMAN_BY_ID_SUCCESS', human: response.data.data });
            }).catch((error) => {
                return dispatch({ type: 'HUMAN_BY_ID_ERROR', humanByIdError: true });
            });
    }
}