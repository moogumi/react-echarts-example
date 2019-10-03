
const initState = {
    list:[]
}

const humanReducer = (state = initState, action) => {    
    switch(action.type){
        case "ADD_HUMAN":                                
            return {...state, list:[...state.list]};
        case "ADD_HUMAN_ERR":                                       
            return {...state, list:[]};
        default:
            return state;    
    }        
}

export default humanReducer;