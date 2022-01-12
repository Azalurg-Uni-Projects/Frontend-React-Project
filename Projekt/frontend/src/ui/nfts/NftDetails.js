import { connect } from "react-redux";
import { getUsers } from "../../ducks/users/selectors";
import { getNfts } from "../../ducks/nfts/selectors";
import { getCollectios } from "../../ducks/collections/selectors";
import { Link } from "react-router-dom";

const NftDetails =({ users, collections, nfts } ,props) => {
    let id = window.location.pathname.slice(15)
    const nft = nfts.filter(nft => nft._id === id)
    const owner = users.filter(user => user._id === nft.owner_id)
    const author = users.filter(user => user._id === nft.author_id)
    const collection = collections.filter(collection => collection.id === nft.collection_id)

    return(
        <div className="Details">
            <div className="Back">
                <Link to="/nfts" className="Bnt">Back</Link>
            </div>
            <div className="Info">
                <section>
                    <h1>{nft.title}</h1>
                    <br/>
                    <p>price: {nft.price}{nft.currency}</p>
                    <p>created date: {nft.created_date}</p>
                    <p>collection:<Link to={`collections/details/${collection._id}`}>{collection.name}</Link></p>
                    <p>autor:<Link to={`users/details/${author._id}`}>{author.name}</Link></p>
                    <p>owner:<Link to={`users/details/${owner._id}`}>{owner.nickname}</Link></p>
                </section>
            </div>
            <div className="Colleted">  
                <section>
                <img src={user.logo_url} alt = "NFT NOT FOUND"/>
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
        collections: getCollectios(state)
    };
}
const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(NftDetails);