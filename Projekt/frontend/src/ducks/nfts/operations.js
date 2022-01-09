import axios from "axios";
import * as actions from './actions';


export const getNftsList = () => {
    return async dispatch => {
        const response = await 
            axios.get('http://localhost:5000/nfts');
        dispatch(actions.nftListAction(response.data));
    }
}

export const deleteNft = (nft) => {
    return async dispatch => {
        const response = await 
            axios.delete(`http://localhost:5000/nfts/${nft._id}`);
        dispatch(actions.nftDeleteAction(response.data));
    }
}

export const createNft = (newNft) => {
    return async dispatch => {
        try {
            const response = await 
            axios.post('http://localhost:5000/nfts', newNft);
            if(response.status === 201) 
                dispatch(actions.nftCreateAction(response.data));
        } catch(ex) {

        }
    }
}