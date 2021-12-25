import axios from "axios";
import * as actions from './actions';


export const getUserList = () => {
    return async dispatch => {
        const response = await 
            axios.get('http://localhost:5000/users');
        dispatch(actions.userListAction(response.data));
    }
}

export const deleteUser = (user) => {
    return async dispatch => {
        const response = await 
            axios.delete(`http://localhost:5000/users/${user.id}`);
        dispatch(actions.userDeleteAction(response.data));
    }
}

export const createUser = (newUser) => {
    return async dispatch => {
        try {
            const response = await 
            axios.post('http://localhost:5000/users', newUser);
            if(response.status === 201) 
                dispatch(actions.userCreateAction(response.data));
        } catch(ex) {

        }
    }
}