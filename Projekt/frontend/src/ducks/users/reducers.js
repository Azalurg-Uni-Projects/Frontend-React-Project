import types from "./types";

export const userReducer = (state = [], action) => {
    switch(action.type) {
        case types.USER_LIST: 
            return [...action.payload]

        case types.USER_CREATE:
            return [...state, action.payload]; 

        case types.USER_DELETE:
            return state.filter(user => user._id !== action.payload._id)
            
        default:
            return state;
    }
}