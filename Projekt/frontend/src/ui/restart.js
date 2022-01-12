import { useEffect } from "react";
import { withRouter } from "react-router";
import {connect } from "react-redux"; 
import { getUsers } from "../ducks/users/selectors";
import { getUserList } from "../ducks/users/operations";
import { getNfts } from "../ducks/nfts/selectors";
import { getNftsList } from "../ducks/nfts/operations";
import { getCollections } from "../ducks/collections/selectors";
import { getCollectionsList } from "../ducks/collections/operations"

const Restart = ({history, getUserList, getNftsList, getCollectionsList }, props) => {
    
    useEffect(async () =>{
        await getUserList();
        await getNftsList();
        await getCollectionsList()
        history.push("dashboard")
    }, [])

    return (
        <div>
            
            <img src="https://pngimg.com/uploads/bulldozer/bulldozer_PNG16474.png" alt="Zdjęcie" className="Logo"></img>

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
    getUserList,
    getNftsList,
    getCollectionsList
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Restart));