import { connect } from "react-redux";
import { getUsers } from "../../ducks/users/selectors";
import { getNfts } from "../../ducks/nfts/selectors";
import { getCollections } from "../../ducks/collections/selectors";
import { Link } from "react-router-dom";

const NftDetails =({ users, collections, nfts } ,props) => {
    let id = window.location.pathname.slice(21)
    const collection = collections.filter(collection => collection._id === id)[0]
    const author = users.filter(user => user._id === collection.author_id)[0]
    const own_nfts = nfts.filter(nft => nft.collection_id === id)


    return(
        <div className="Details">
            <div className="Back">
                <Link to="/collections" className="Btn">Back</Link>
            </div>
            <div className="Colleted">  
                <h1>{collection.name}</h1>
                <img className="Large-img" src={collection.img_url} alt = "COLLECTION NOT FOUND"/>
                <p>{collection.description}</p>
                <p>author: <Link className="Link" to={`/users/details/${author._id}`}>{author.nickname}</Link></p>
                <p>created date: {collection.created_date}</p>
                <div className="List">
                    {own_nfts ? own_nfts.map(nft =>(
                    <div key={nft._id} className="ListContainer">
                    <Link to={`/nfts/details/${nft._id}`}>
                            <img className="Small-img" src={nft.image_url} alt = "NFT NOT FOUND"/>
                    </Link>
                    <p>{nft.title}</p>  
                </div>
            )) : <div>No one here</div>}
            </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        nfts: getNfts(state),
        collections: getCollections(state)
    };
}
const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(NftDetails);