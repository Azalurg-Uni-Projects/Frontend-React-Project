import axios from "axios";
import * as actions from './actions';


export const getNftsList = () => {
    return async dispatch => {
        const response = await 
            axios.get('http://127.0.0.1:5000/nfts');
        dispatch(actions.nftListAction(response.data));
    }
}