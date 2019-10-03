import  apiHuman from '../../api/apiHuman';
import axios from 'axios';
import { createHumanUrl } from '../../api/apiHuman';

export const addHuman = (human) => {
    return (dispatch, getState) => {  
        
        axios.post(createHumanUrl(), 
        {
            firstName : human.firstName, 
            lastName: human.lastName, 
            age: parseInt(human.age, 10)
        })
          .then((response) => {
            return dispatch({type: 'ADD_HUMAN', human: response.data.data});
          }, (error) => {
            return dispatch({type: 'ADD_HUMAN_ERROR', error});
          });
        
    }
}