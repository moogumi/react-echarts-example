const initState = {
    humanList: [],
    human: {},
    humanListError: false,
    humanAddError: false,
    humanByIdError: false,
}

const humanReducer = (state = initState, action) => {
    switch (action.type) {
        case "HUMAN_ADD_SUCCESS":
            return { ...state, humanList: [...state.humanList, action.human], humanAddError: false };
        case "HUMAN_ADD_ERROR":
            return { ...state, humanAddError: true };
        case "HUMAN_LIST_SUCCESS":
            return { ...state, humanList: [...action.humanList], humanListError: false };
        case "HUMAN_LIST_ERROR":
            return { ...state, humanListError: true };
        case "HUMAN_BY_ID_SUCCESS":
            return { ...state, human: action.human, humanByIdError: false };
        case "HUMAN_BY_ID_ERROR":
            return { ...state, humanByIdError: true };
        default:
            return state;
    }
}

export default humanReducer;