const initState = {
    list:[]
}

const humanReducer = (state = initState, action) => {    
    switch(action.type){
        case "ADD_HUMAN":                                
            return {...state, list:[...state.list]};
        case "ADD_HUMAN_ERROR":                                       
            return {...state, list:[...state.list]};
        default:
            return state;    
    }        
}

export default humanReducer;