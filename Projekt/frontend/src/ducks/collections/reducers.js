import types from "./types";

export const collectionReducer = (state = [], action) => {
    switch(action.type) {
        case types.COLLECTION_LIST: 
            return [...action.payload]
        case types.COLLECTION_CREATE:
            return [...state, action.payload]; 
        default:
            return state;
    }
}