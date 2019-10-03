const initState = {
    list: []
}

const humanReducer = (state = initState, action) => {    
    switch(action.type){
        case "ADD_HUMAN":                           
            //todo make async service call and remove this      
            console.log(state);        
            action.human.id = state.list.length > 0 ?  state.list[state.list.length-1].id + 1 : '1';
            const newList = [...state.list];
            newList.push(action.human);
            state.list = newList;
            return {...state};
        default:
            return state;    
    }        
}

export default humanReducer;