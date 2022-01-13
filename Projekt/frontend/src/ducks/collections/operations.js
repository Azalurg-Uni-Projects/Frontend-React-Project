import axios from "axios";
import * as actions from './actions';


export const getCollectionsList = () => {
    return async dispatch => {
        try{
            const response = await axios.get('http://localhost:5000/collections');
            if(response.status === 200)
                dispatch(actions.collectionListAction(response.data));
        }catch(ex) {
            console.log(ex)
        }
    }
}

export const deleteCollection = (collection) => {
    return async dispatch => {
        try{
            const response = await axios.delete(`http://localhost:5000/collections/${collection._id}`);
            if(response.status === 200)
                dispatch(actions.collectionDeleteAction(response.data));
        }catch(ex) {
            console.log(ex)
        }
        
    }
}

export const createCollection = (newCollection) => {
    return async dispatch => {
        try {
            const response = await 
            axios.post('http://localhost:5000/collections', newCollection);
            if(response.status === 200) 
                dispatch(actions.collectionCreateAction(response.data));
        } catch(ex) {
            console.log(ex)
        }
    }
}

export const editCollection = (collection) => {
    return async dispatch => {
        try {
            const response = await 
            axios.put(`http://localhost:5000/collections/${collection._id}`, collection);
            if(response.status === 200) 
                dispatch(actions.collectionEditAction(response.data));
        } catch(ex) {
            console.log(ex)
        }
    }
}