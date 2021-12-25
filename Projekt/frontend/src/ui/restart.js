import { useEffect } from "react";
import { withRouter } from "react-router";
import { getUserList } from "../ducks/users/operations";
import {connect } from "react-redux"; 
import { getUsers } from "../ducks/users/selectors";
import { getNfts } from "../ducks/nfts/selectors";
import { getNftsList } from "../ducks/nfts/operations";

const Restart = ({history, getUserList, getNftsList }, props) => {
    
    useEffect(async () =>{
        await getUserList();
        await getNftsList();
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
        nfts: getNfts(state)
    };
}
const mapDispatchToProps = {
    getUserList,
    getNftsList
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Restart));