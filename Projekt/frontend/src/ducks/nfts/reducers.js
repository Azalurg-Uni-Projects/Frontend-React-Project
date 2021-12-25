import types from "./types";

export const nftReducer = (state = [], action) => {
    switch(action.type) {
        case types.NFT_LIST: 
            return [...action.payload]
        case types.NFT_CREATE:
            return [...state, action.payload]; 
        default:
            return state;
    }
}