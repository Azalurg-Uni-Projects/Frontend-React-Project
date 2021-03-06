import { connect } from "react-redux";
import { getUsers } from "../../ducks/users/selectors";
import { getNfts } from "../../ducks/nfts/selectors";
import { deleteNft } from "../../ducks/nfts/operations";
import { getCollections } from "../../ducks/collections/selectors";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import { useTranslation } from "react-i18next";

const NftDetails =({ users, collections, nfts, deleteNft, history } ,props) => {
    let id = window.location.pathname.slice(14)
    const nft = nfts.find(nft => nft._id === id)
    const owner = users.find(user => user._id === nft.owner_id)
    const author = users.find(user => user._id === nft.author_id)
    const collection = collections.find(collection => collection._id === nft.collection_id)
    
    const { t } = useTranslation();

    return(
        <div className="Details">
            <div className="Back">
                <Link to="/nfts" className="Btn">{t("Back")}</Link>
            </div>
            <div className="Info">
                <section>
                    <h3>{t("Nft data")}</h3>
                    <p>{t("price")}: {nft.price} {nft.currency}</p>
                    <p>{t("created date")}: {new Date(nft.created_date).toLocaleDateString('pl-PL')}</p>
                    {collection ? <p>{t("collection")}: <Link className="Link" to={`/collections/details/${collection._id}`}>{collection.name}</Link></p>  : <></>}
                    {author ? <p>{t("author")}: <Link className="Link" to={`/users/details/${author._id}`}>{author.nickname}</Link></p> : <></>} 
                    {owner ? <p>{t("owner")}: <Link className="Link" to={`/users/details/${owner._id}`}>{owner.nickname}</Link></p> : <></>}
                    <Link className="Btn" to={`/nfts/edit/${id}`}>{t("Edit")}</Link>
                    <button className="Btn Delete" onClick={() => {deleteNft(nft); history.push("/nfts")}}>{t("Delete")}</button>
                </section>
            </div>
            <div className="Colleted">  
                <section>
                <h1>{nft.title}</h1>
                <img src={nft.image_url} alt = "NFT NOT FOUND" className="Large-img"/>
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
