import types from "./types";

export const collectionReducer = (state = [], action) => {
    switch(action.type) {
        case types.COLLECTION_LIST: 
            return [...action.payload]

        case types.COLLECTION_CREATE:
            return [...state, action.payload]; 

        case types.COLLECTION_DELETE:
            return state.filter(collectio => collectio._id !== action.payload._id);

        default:
            return state;
    }
}