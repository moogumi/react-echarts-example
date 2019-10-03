export const addHuman = (human) => {
    return (dispatch, getState) => {
        //make asynk call to database
        setTimeout(() => {
            dispatch({type: 'ADD_HUMAN', human});
        }, 1000);
    }
}