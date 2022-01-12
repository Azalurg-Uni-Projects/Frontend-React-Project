import axios from "axios";
import * as actions from './actions';

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array
}

export const getNftsList = () => {
    return async dispatch => {
        const response = await 
            axios.get('http://localhost:5000/nfts');
        dispatch(actions.nftListAction(shuffleArray(response.data)));
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