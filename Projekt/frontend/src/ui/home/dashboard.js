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
                console.log(owner);
                break
            }
        }
    }
    // const collection_warht_most
    const bigest_artist = () => {
        const count = _.countBy(nfts, 'author_id')
        var max = Object.values(count).sort().reverse()
        for (var i = 0; i < max.length; i++) {
            const owners = Object.keys(count).find(key => count[key] === max[i])
            const owner = users.find(user => user._id === owners)
            if (owner){
                console.log(owner);
                break
            }
        }
    }
    // const nft_warht_most

    // const nft_sum
    // const usets_sum
    // const collections_sum

    return (
        <div>
            <table>
                <tr>
                    <td>Users</td> <td>Nfts</td> <td>Collections</td>
                </tr>
                <tr>
                    <td>{sum_users}</td> <td>{sum_nfts}</td> <td>{sum_collections}</td>
                </tr>
            </table>
                {own_most()} {bigest_artist()}
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