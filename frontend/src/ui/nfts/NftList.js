import { connect } from "react-redux"; 
import { getNfts } from "../../ducks/nfts/selectors";
import { Link } from "react-router-dom";
import { sortNft } from '../../ducks/nfts/operations'

const NftList = ({ nfts, sortNft} ,props) => {
    // function shuffleArray(array) {
    //     for (let i = array.length - 1; i > 0; i--) {
    //         let j = Math.floor(Math.random() * (i + 1));
    //         let temp = array[i];
    //         array[i] = array[j];
    //         array[j] = temp;
    //     }
    //     return array
    // }
    // nfts = shuffleArray(nfts)
    const _ = require('lodash');

    const sort = (x) => {
        const nfts_sorted = _.chain(_.sortBy(nfts,[x])).forEach().value()
        sortNft(nfts_sorted)
    }

    return(
        <div>
            <h1>Nfts List</h1>
            <ul className="sortbar">
                <li>
                    <label htmlFor="sort">
                        Sort:
                    </label>
                    <select id="sort" onChange={(x) => (sort(x.target.value))}>
                        <option value="_id">-------------</option>
                        <option value="author_id">author</option>
                        <option value="owner_id">owner</option>
                        <option value="collection_id">collection</option>
                        <option value="collection_id">collection</option>
                        <option value="price">price (lowest)</option>
                        <option value="created_date">created date</option>
                    </select>
                </li>
            </ul>
            <div className="List">
                {nfts ? nfts.map(nft =>(
                    <div key={nft._id} className="ListContainer">
                        <Link to={`/nfts/details/${nft._id}`}>
                            <img className="Small-img" src={nft.image_url} alt = "NFT NOT FOUND"/>
                        </Link>
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
    sortNft
}

export default connect(mapStateToProps, mapDispatchToProps)(NftList);