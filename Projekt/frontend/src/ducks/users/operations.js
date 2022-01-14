import axios from "axios";
import * as actions from './actions';


export const getUserList = () => {
    return async dispatch => {
        try{
            const response = await axios.get('http://localhost:5000/users');
            if(response.status === 200) 
                dispatch(actions.userListAction(response.data));
        }catch(ex) {
            console.log(ex)
        }
    }
}

export const deleteUser = (user) => {
    return async dispatch => {
        try {
            const response = await axios.delete(`http://localhost:5000/users/${user._id}`);
            if(response.status === 200) 
                dispatch(actions.userDeleteAction(response.data));
        }catch(ex) {
            console.log(ex)
        }
    }
}

export const createUser = (newUser) => {
    return async dispatch => {
        try {
            const response = await axios.post('http://localhost:5000/users', newUser);
            if(response.status === 200) 
                dispatch(actions.userCreateAction(response.data));
        } catch(ex) {
            console.log(ex)
        }
    }
}

export const editUser = (user) => {
    return async dispatch => {
        try {
            const response = await axios.put(`http://localhost:5000/users/${user._id}`, user);
            if(response.status === 200) 
                dispatch(actions.userEditAction(response.data));
        } catch(ex) {
            console.log(ex)
        }
    }
}
export const sortUser = (users) => {
    return async dispatch =>{
        try{
            dispatch(actions.userSortAction(users))
        }catch(ex) {
            console.log(ex)
        }
    }
}