import { connect } from "react-redux";
import { getUsers } from "../../ducks/users/selectors";
import { getNfts } from "../../ducks/nfts/selectors";
import { deleteNft } from "../../ducks/nfts/operations";
import { getCollections } from "../../ducks/collections/selectors";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

const NftDetails =({ users, collections, nfts, deleteNft, history } ,props) => {
    let id = window.location.pathname.slice(14)
    const nft = nfts.find(nft => nft._id === id)
    const owner = users.find(user => user._id === nft.owner_id)
    const author = users.find(user => user._id === nft.author_id)
    const collection = collections.find(collection => collection._id === nft.collection_id)
    
    return(
        <div className="Details">
            <div className="Back">
                <Link to="/nfts" className="Btn">Back</Link>
            </div>
            <div className="Info">
                <section>
                    <h3>Nft data</h3>
                    <p>price: {nft.price} {nft.currency}</p>
                    <p>created date: {new Date(nft.created_date).toLocaleDateString('pl-PL')}</p>
                    {collection ? <p>collection: <Link className="Link" to={`/collections/details/${collection._id}`}>{collection.name}</Link></p>  : <p>None</p>}
                    {author ? <p>author: <Link className="Link" to={`/users/details/${author._id}`}>{author.nickname}</Link></p> : <p>None</p>} 
                    {owner ? <p>owner: <Link className="Link" to={`/users/details/${owner._id}`}>{owner.nickname}</Link></p> : <p>None</p>}
                    <button className="Btn Delete" onClick={() => {deleteNft(nft); history.push("/nfts")}}>Delete</button>
                </section>
            </div>
            <div className="Colleted">  
                <section>
                <h1>{nft.title}</h1>
                <img src={nft.image_url} alt = "NFT NOT FOUND"/>
                <p>{nft.description}</p>
                </section>
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
    deleteNft
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NftDetails));
