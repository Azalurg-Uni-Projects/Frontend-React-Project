import { connect } from "react-redux";
import { getUsers } from "../../ducks/users/selectors";
import { getNfts } from "../../ducks/nfts/selectors";
import { getCollections } from "../../ducks/collections/selectors";
import { Link } from "react-router-dom";
import { deleteCollection } from "../../ducks/collections/operations";
import { withRouter } from "react-router"
import { useTranslation } from "react-i18next";


const NftDetails =({ users, collections, nfts, deleteCollection, history } ,props) => {
    let id = window.location.pathname.slice(21)
    const collection = collections.filter(collection => collection._id === id)[0]
    const author = users.filter(user => user._id === collection.author_id)[0]
    const own_nfts = nfts.filter(nft => nft.collection_id === id)
    const { t } = useTranslation();


    return(
        <div className="Details">
            <div className="Back">
                <Link to="/collections" className="Btn">Back</Link>
            </div>
            <div className="Colleted">  
                <h1>{collection.name}</h1>
                <img className="Large-img" src={collection.img_url} alt = "COLLECTION NOT FOUND"/>
                <p>{collection.description}</p>
                <p>{t("author")}: {author ? <Link className="Link" to={`/users/details/${author._id}`}>{author.nickname}</Link> : <>none</>}</p>
                <p>{t("created date")}: {new Date(collection.created_date).toLocaleDateString('pl-PL')}</p>
                <ul>
                    <li>
                        <Link className="Btn" to={`/collections/edit/${id}`}>{t("Edit")}</Link>
                    </li>
                    <li>
                        <button className="Btn Delete" onClick={() => {deleteCollection(collection); history.push('/collections')}}>{t("Delete")}</button>
                    </li>
                </ul>
                <div className="List">
                    {own_nfts ? own_nfts.map(nft =>(
                    <div key={nft._id} className="ListContainer">
                    <Link to={`/nfts/details/${nft._id}`}>
                            <img className="Small-img" src={nft.image_url} alt = "NFT NOT FOUND"/>
                    </Link>
                    <p>{nft.title}</p>  
                </div>
            )) : <></>}
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
    deleteCollection
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NftDetails));