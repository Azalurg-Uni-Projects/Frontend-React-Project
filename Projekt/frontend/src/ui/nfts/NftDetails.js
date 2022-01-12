import { connect } from "react-redux";
import { getUsers } from "../../ducks/users/selectors";
import { getNfts } from "../../ducks/nfts/selectors";
import { getCollectios } from "../../ducks/collections/selectors";
import { Link } from "react-router-dom";

const NftDetails =({ users, collections, nfts } ,props) => {
    let id = window.location.pathname.slice(15)
    return(
        <div>

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