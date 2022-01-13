import types from './types';

export const nftListAction = (nft) => ({
    type: types.NFT_LIST,
    payload: nft
});

export const nftCreateAction = (newNft) => ({
    type: types.NFT_CREATE,
    payload: newNft
});

export const nftDeleteAction = (nft) => ({
    type: types.NFT_DELETE,
    payload: nft
});

export const nftEditAction = (nft) => ({
    type: types.NFT_EDIT,
    payload: nft
});
