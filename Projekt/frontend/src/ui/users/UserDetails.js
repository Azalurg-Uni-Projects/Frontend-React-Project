import { connect } from "react-redux"; 
import { getUsers } from "../../ducks/users/selectors";
import { deleteUser } from "../../ducks/users/operations";
import { getNfts } from "../../ducks/nfts/selectors";
import { getCollections } from "../../ducks/collections/selectors";
import { Link } from "react-router-dom";

const UserDetails = ({ users, collections, nfts, deleteUser } ,props) => {
    let id = window.location.pathname.slice(15)
    const user = users.find(user => user._id === id)
    const own_nfts = nfts.filter(nft => nft.owner_id === user._id)
    const created_nfts = nfts.filter(nft => nft.author_id === user._id)
    const created_collections = collections.filter(collection => collection.author_id === user._id)

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
                    <p>birthday: {new Date(user.birthday).toLocaleDateString('pl-PL')}</p>
                    <p>place of origin: {user.place_of_origin}</p>
                    <h4>Contact</h4>
                    <p>email: {user.email}</p>
                    <p>phone number: {user.phone_number}</p>
                    <p>created collections:</p>
                    {created_collections ? created_collections.map(collection =>(
                        <Link className="Link" to={`/collections/details/${collection._id}`} key={collection._id}> - {collection.name}</Link>
                    )) : <div>No one here</div>}
                    <br/>
                    

                </section>
            </div>
            <section className="Collected">
                <h3>Collected NFTs</h3>
                <div className="List">
                    {own_nfts ? own_nfts.map(nft =>(
                    <div key={nft._id} className="ListContainer">
                        <Link to={`/nfts/details/${nft._id}`}>
                            <img className="Small-img" src={nft.image_url} alt = "NFT NOT FOUND"/> 
                        </Link>
                        <p>{nft.title}</p> 
                </div>
            )) : <div>No one here</div>}
        </div>
            </section>
            <section className="Created">
                <h3>Created NFTs</h3>
                <div className="List">
                    {created_nfts ? created_nfts.map(nft =>(
                    <div key={nft._id} className="ListContainer">
                    <Link to={`/nfts/details/${nft._id}`}>
                            <img className="Small-img" src={nft.image_url} alt = "NFT NOT FOUND"/>
                    </Link>
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
        nfts: getNfts(state),
        collections: getCollections(state)
    };
}
const mapDispatchToProps = {
    deleteUser
}

export default connect(mapStateToProps, mapDispatchToProps)(UserDetails);