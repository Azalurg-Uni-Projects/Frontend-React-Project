import {connect } from "react-redux"; 
import { getNfts } from "../../ducks/nfts/selectors";

const NftList = ({ nfts, getNftList } ,props) => {

    

    return(
        <div>
            <h1>Nfts List</h1>
            <div className="List">
                {nfts ? nfts.map(nft =>(
                    <div key={nft._id} className="ListContainer">
                    <img className="Small-img" src={nft.image_url} alt = "NFT NOT FOUND"/>
                    <p>{nft.title}</p>
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
    
}

export default connect(mapStateToProps, mapDispatchToProps)(NftList);