import types from './types';

export const userListAction = (users) => ({
    type: types.USER_LIST,
    payload: users
});

export const userCreateAction = (newUser) => ({
    type: types.USER_CREATE,
    payload: newUser
});

export const userEditAction = (user) => ({
    type: types.USER_EDIT,
    payload: user
});


export const userDeleteAction = (user) => ({
    type: types.USER_DELETE,
    payload: user
});
