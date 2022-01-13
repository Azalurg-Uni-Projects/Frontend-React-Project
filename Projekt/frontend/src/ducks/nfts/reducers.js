import types from "./types";

export const nftReducer = (state = [], action) => {
    switch(action.type) {
        case types.NFT_LIST: 
            return [...action.payload]

        case types.NFT_CREATE:
            return [...state, action.payload];
            
        case types.NFT_DELETE:
            return state.filter(nft => nft._id !== action.payload._id)

        case types.NFT_EDIT:
            return [...state.filter(nft => nft._id !== action.payload._id), action.payload]

        default:
            return state;
    }
}