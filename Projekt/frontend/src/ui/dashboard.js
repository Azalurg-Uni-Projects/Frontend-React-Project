import { connect } from "react-redux"; 
import { getUsers } from "../ducks/users/selectors";
import { getNfts } from "../ducks/nfts/selectors";
import { getCollections } from "../ducks/collections/selectors";
import { Link } from "react-router-dom";

const Dashboard = ({users, collections, nfts}) => {

    // const sum_nfts
    // const sum_users
    // const sum_collections

    // const own_most 
    // const collection_warht_most
    // const bigest_artist
    // const nft_warht_most

    // const nft_sum
    // const usets_sum
    // const collections_sum

    return (
        <div>
            dashboard
            {
                //tabela z sumami
                //kto ma nawięcj
                //
            }
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