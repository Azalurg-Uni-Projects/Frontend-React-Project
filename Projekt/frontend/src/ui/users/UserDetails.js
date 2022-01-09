import { connect } from "react-redux"; 
import { getUsers } from "../../ducks/users/selectors";
import { deleteUser } from "../../ducks/users/operations";
import { getNfts } from "../../ducks/nfts/selectors";
import { Link } from "react-router-dom";

const UserDetails = ({ users, nfts, deleteUser } ,props) => {
    let id = window.location.pathname.slice(15)
    const user = users.find(user => user._id === id)
    const own = nfts.filter(nft => nft.owner_id === user._id)
    const created = nfts.filter(nft => nft.author_id === user._id)
    //console.log(props.match.params.id);

    return(
        <div className="Details">
            <div className="Back">
                <Link to="/users" className="Btn">Back</Link>
            </div>
            <div className="Info">
                <section>
                    <img className="Normal-img Circle" src={user.logo_url} alt = "USER NOT FOUND"/>
                    <h2>{user.nickname}</h2>
                    <p>{user.description}</p>
                    <h4>Personal data</h4>
                    <p>name: {user.firstname} {user.lastname}</p>
                    <p>birthday: {user.birthday}</p>
                    <p>place of origin: {user.place_of_origin}</p>
                    <h4>Contact</h4>
                    <p>email: {user.email}</p>
                    <p>phone number: {user.phone_number}</p>
                </section>
            </div>
            <section className="Collected">
                <h3>Collected NFTs</h3>
                <div className="List">
                    {own ? own.map(nft =>(
                    <div key={nft._id} className="ListContainer">
                    <img className="Small-img" src={nft.image_url} alt = "NFT NOT FOUND"/>
                    <p>{nft.title}</p>
                </div>
            )) : <div>No one here</div>}
        </div>
            </section>
            <section className="Created">
                <h3>Created NFTs</h3>
                <div className="List">
                    {created ? created.map(nft =>(
                    <div key={nft._id} className="ListContainer">
                    <img className="Small-img" src={nft.image_url} alt = "NFT NOT FOUND"/>
                    <p>{nft.title}</p>
                </div>
            )) : <div>No one here</div>}
            </div>
            </section>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        nfts: getNfts(state)
    };
}
const mapDispatchToProps = {
    deleteUser
}

export default connect(mapStateToProps, mapDispatchToProps)(UserDetails);