import { connect } from "react-redux";
import { getUsers } from "../../ducks/users/selectors";
import { getNfts } from "../../ducks/nfts/selectors";
import { getCollections } from "../../ducks/collections/selectors";
import { Link } from "react-router-dom";

const NftDetails =({ users, collections, nfts } ,props) => {
    let id = window.location.pathname.slice(14)
    const nft = nfts.filter(nft => nft._id === id)[0]
    const owner = users.filter(user => user._id === nft.owner_id)[0]
    const author = users.filter(user => user._id === nft.author_id)[0]
    const collection = collections.filter(collection => collection._id === nft.collection_id)[0]
    return(
        <div className="Details">
            <div className="Back">
                <Link to="/nfts" className="Btn">Back</Link>
            </div>
            <div className="Info">
                <section>
                    <br/>
                    <p>price: {nft.price} {nft.currency}</p>
                    <p>created date: {nft.created_date}</p>
                    collection: <Link className="Link" to={`/collections/details/${collection._id}`}>{collection.name}</Link><br/><br/>
                    autor: <Link className="Link" to={`/users/details/${author._id}`}>{author.nickname}</Link><br/><br/>
                    owner: <Link className="Link" to={`/users/details/${owner._id}`}>{owner.nickname}</Link><br/><br/>
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
    
}

export default connect(mapStateToProps, mapDispatchToProps)(NftDetails);
