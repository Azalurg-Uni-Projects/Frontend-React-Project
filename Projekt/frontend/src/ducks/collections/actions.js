import types from './types';

export const collectionListAction = (collection) => ({
    type: types.COLLECTION_LIST,
    payload: collection
});

export const collectionCreateAction = (newCollection) => ({
    type: types.COLLECTION_CREATE,
    payload: newCollection
});

export const collectionDeleteAction = (collection) => ({
    type: types.COLLECTION_DELETE,
    payload: collection
});

export const collectionEditAction = (Collection) => ({
    type: types.COLLECTION_EDIT,
    payload: Collection
});