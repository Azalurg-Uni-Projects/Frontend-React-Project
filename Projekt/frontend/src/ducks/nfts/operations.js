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
        try{
            const response = await axios.get('http://localhost:5000/nfts');
            if(response.status === 200)
                dispatch(actions.nftListAction(shuffleArray(response.data)));
        } catch(ex) {
                console.log(ex)
        }
    }
}

export const deleteNft = (nft) => {
    return async dispatch => {
        try{
            const response = await axios.delete(`http://localhost:5000/nfts/${nft._id}`);
            if(response.status === 200)
                dispatch(actions.nftDeleteAction(response.data));
        } catch(ex) {
                console.log(ex)
        }
    }
}

export const createNft = (newNft) => {
    return async dispatch => {
        try {
            const response = await axios.post('http://localhost:5000/nfts', newNft);
            if(response.status === 200) 
                dispatch(actions.nftCreateAction(response.data));
        } catch(ex) {
            console.log(ex)
    }
    }
}

export const editNft = (nft) => {
    return async dispatch => {
        try {
            const response = await axios.put(`http://localhost:5000/nfts/${nft._id}`, nft);
            if(response.status === 200) 
                dispatch(actions.nftEditAction(response.data));
        } catch(ex) {
            console.log(ex)
    }
    }
}