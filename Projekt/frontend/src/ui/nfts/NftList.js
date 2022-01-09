import { connect } from "react-redux"; 
import { getNfts } from "../../ducks/nfts/selectors";
import { deleteNft } from "../../ducks/nfts/operations";

const NftList = ({ nfts, deleteNft} ,props) => {

    

    return(
        <div>
            <h1>Nfts List</h1>
            <div className="List">
                {nfts ? nfts.map(nft =>(
                    <div key={nft._id} className="ListContainer">
                    <img className="Small-img" src={nft.image_url} alt = "NFT NOT FOUND"/>
                    <p>{nft.title}</p>
                    <button className="Btn Delete" onClick={() => {deleteNft(nft)}}>Delete</button>
                    </div>
                )) : <div>No one here</div>}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        nfts: getNfts(state)
    };
}
const mapDispatchToProps = {
    deleteNft
}

export default connect(mapStateToProps, mapDispatchToProps)(NftList);