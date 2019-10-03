const initState = {
    list: [
        {id :'1', firstName: 'edd', lastName: 'kr', age: 25},
        {id :'2', firstName: 'edd', lastName: 'kr', age: 125},
        {id :'3', firstName: 'edd', lastName: 'kr', age: 35},
        {id :'4', firstName: 'edd', lastName: 'kr', age: 35},
        {id :'5', firstName: 'edd', lastName: 'kr', age: 25},
        {id :'6', firstName: 'edd', lastName: 'kr', age: 12},
        {id :'7', firstName: 'edd', lastName: 'kr', age: 33},
        {id :'8', firstName: 'edd', lastName: 'kr', age: 45},
        {id :'9', firstName: 'edd', lastName: 'kr', age: 35},
        {id :'10', firstName: 'edd', lastName: 'kr', age: 45},
        {id :'11', firstName: 'edd', lastName: 'kr', age: 35},
        {id :'12', firstName: 'edd', lastName: 'kr', age: 45},
        {id :'13', firstName: 'edd', lastName: 'kr', age: 35},
        {id :'14', firstName: 'edd', lastName: 'kr', age: 25},
        {id :'1', firstName: 'edd', lastName: 'kr', age: 25},
        {id :'2', firstName: 'edd', lastName: 'kr', age: 125},
        {id :'3', firstName: 'edd', lastName: 'kr', age: 35},
        {id :'4', firstName: 'edd', lastName: 'kr', age: 15},
        {id :'5', firstName: 'edd', lastName: 'kr', age: 25},
        {id :'6', firstName: 'edd', lastName: 'kr', age: 13},
        {id :'7', firstName: 'edd', lastName: 'kr', age: 34},
        {id :'8', firstName: 'edd', lastName: 'kr', age: 43},
        {id :'9', firstName: 'edd', lastName: 'kr', age: 32},
        {id :'10', firstName: 'edd', lastName: 'kr', age: 41},
        {id :'11', firstName: 'edd', lastName: 'kr', age: 34},
        {id :'12', firstName: 'edd', lastName: 'kr', age: 48},
        {id :'13', firstName: 'edd', lastName: 'kr', age: 39},
        {id :'14', firstName: 'edd', lastName: 'kr', age: 29},
        {id :'1', firstName: 'edd', lastName: 'kr', age: 25},
        {id :'2', firstName: 'edd', lastName: 'kr', age: 121},
        {id :'3', firstName: 'edd', lastName: 'kr', age: 33},
        {id :'4', firstName: 'edd', lastName: 'kr', age: 34},
        {id :'5', firstName: 'edd', lastName: 'kr', age: 22},
        {id :'6', firstName: 'edd', lastName: 'kr', age: 13},
        {id :'7', firstName: 'edd', lastName: 'kr', age: 36},
        {id :'8', firstName: 'edd', lastName: 'kr', age: 44},
        {id :'9', firstName: 'edd', lastName: 'kr', age: 34},
        {id :'10', firstName: 'edd', lastName: 'kr', age: 41},
        {id :'11', firstName: 'edd', lastName: 'kr', age: 35},
        {id :'12', firstName: 'edd', lastName: 'kr', age: 45},
        {id :'13', firstName: 'edd', lastName: 'kr', age: 35},
        {id :'14', firstName: 'edd', lastName: 'kr', age: 25}
    ]
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