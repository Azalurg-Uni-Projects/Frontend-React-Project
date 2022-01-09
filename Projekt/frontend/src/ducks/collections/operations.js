import axios from "axios";
import * as actions from './actions';


export const getCollectionsList = () => {
    return async dispatch => {
        const response = await 
            axios.get('http://localhost:5000/collections');
        dispatch(actions.collectionListAction(response.data));
    }
}

export const deleteCollection = (collection) => {
    return async dispatch => {
        const response = await 
            axios.delete(`http://localhost:5000/collections/${collection._id}`);
        dispatch(actions.collectionDeleteAction(response.data));
    }
}

export const createUser = (newUser) => {
    return async dispatch => {
        try {
            const response = await 
            axios.post('http://localhost:5000/collections', newUser);
            if(response.status === 201) 
                dispatch(actions.collectionCreateAction(response.data));
        } catch(ex) {

        }
    }
}