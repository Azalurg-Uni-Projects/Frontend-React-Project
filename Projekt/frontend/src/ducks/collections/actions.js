import types from './types';

export const collectionListAction = (collection) => ({
    type: types.COLLECTION_LIST,
    payload: collection
});

export const collectionCreateAction = (newCollection) => ({
    type: types.COLLECTION_CREATE,
    payload: newCollection
});
