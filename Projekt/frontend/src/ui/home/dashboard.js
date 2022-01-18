import { connect } from "react-redux"; 
import { getUsers } from "../../ducks/users/selectors";
import { getNfts } from "../../ducks/nfts/selectors";
import { getCollections } from "../../ducks/collections/selectors";
import { Link } from "react-router-dom";

const Dashboard = ({users, collections, nfts}) => {
    const _ = require('lodash');

    const sum_nfts = nfts.length;
    const sum_users = users.length;
    const sum_collections = collections.length;

    const own_most = () => {
        const count = _.countBy(nfts, 'owner_id')
        var max = Object.values(count).sort().reverse()
        for (var i = 0; i < max.length; i++) {
            const owners = Object.keys(count).find(key => count[key] === max[i])
            const owner = users.find(user => user._id === owners)
            if (owner){
                return(owner);
            }
        }
    }
    const owner = own_most()

    const bigest_artist = () => {
        const count = _.countBy(nfts, 'author_id')
        var max = Object.values(count).sort().reverse()
        for (var i = 0; i < max.length; i++) {
            const owners = Object.keys(count).find(key => count[key] === max[i])
            const owner = users.find(user => user._id === owners)
            if (owner){
                return(owner);
            }
        }
    }
    const author = bigest_artist()

    const bigest_collection = () => {
        const count = _.countBy(nfts, 'collection_id')
        var max = Object.values(count).sort().reverse()
        for (var i = 0; i < max.length; i++) {
            const x = Object.keys(count).find(key => count[key] === max[i])
            const collection = collections.find(collection => collection._id === x)
            if (collection){
                return(collection);
            }
        }
    }
    const collection = bigest_collection()

    const nft_warht_most = () =>{
        const nfts_sorted = _.chain(_.sortBy(nfts,['price'])).forEach().reverse().value()
        return(nfts_sorted[0])
    }
    const nft = nft_warht_most()

    // const collection_warht_most

    return (
        <div className="Dashboard">
            <table>
                <tbody>
                    <tr>
                        <th>Users</th> 
                        <td>{sum_users}</td> 
                        
                        
                    </tr>
                    <tr>
                        <th>Nfts</th> 
                        <td>{sum_nfts}</td> 
                        
                    </tr>
                    <tr>
                        <th>Collections</th>
                        <td>{sum_collections}</td>
                    </tr>
                </tbody>
            </table>
            <br/>
            <div className="List">
            {owner ? 
                <div className="ListContainer"> 
                    <h2>Bigest owner</h2>
                    <Link to={`/users/details/${owner._id}`}>
                        <img className="Small-img Circle" src={owner.logo_url} alt = "404"/>
                    </Link>
                    <p>{owner.nickname}</p>
                </div> : <></>
            }
            {author ? 
                <div className="ListContainer"> 
                    <h2>Bigest artist</h2>
                    <Link to={`/users/details/${author._id}`}>
                        <img className="Small-img Circle" src={author.logo_url} alt = "404"/>
                    </Link>
                    <p>{author.nickname}</p>
                </div> : <></>
            }
            {collection ? 
                <div className="ListContainer"> 
                    <h2>Bigest Collection</h2>
                    <Link to={`/collections/details/${collection._id}`}>
                        <img className="Small-img Circle" src={collection.img_url} alt = "404"/>
                    </Link>
                    <p>{collection.name}</p>
                </div> : <></>
            }
            {collection ? 
                <div className="ListContainer"> 
                    <h2>Most expensive NFT</h2>
                    <Link to={`/nfts/details/${nft._id}`}>
                        <img className="Small-img Circle" src={nft.image_url} alt = "404"/>
                    </Link>
                    <p>{nft.title}</p>
                </div> : <></>
            }
            </div>
            
    
            <p><Link to="/" className="Btn Delete">Load</Link></p>
              
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        nfts: getNfts(state),
        collections: getCollections(state)
    };
}
const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);