import { connect } from "react-redux"; 
import { getUsers } from "../../ducks/users/selectors";
import { deleteUser } from "../../ducks/users/operations";
import { getNfts } from "../../ducks/nfts/selectors";
import { getCollections } from "../../ducks/collections/selectors";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

const UserDetails = ({ users, collections, nfts, deleteUser, history } ,props) => {
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
                    <p>join date: {new Date(user.registration_date).toLocaleDateString('pl-PL')}</p>
                    <h4>Contact</h4>
                    <p>email: {user.email}</p>
                    <p>phone number: {user.phone_number}</p>
                    
                    {created_collections ? 
                    <div>
                        created collections:
                        {created_collections.map(collection =>(
                            <p><Link className="Link" to={`/collections/details/${collection._id}`} key={collection._id}> - {collection.name}</Link></p>))}

                    </div> : <> </>}
                    <br/>
                    <br/>
                    <Link className="Btn" to={`/users/edit/${id}`}>Edit User</Link>
                    <button className="Btn Delete" onClick={() => {deleteUser(user); history.push("/users")}}>Delete</button>
                    <br/>
                    <Link to={`/nfts/create/${id}`} className="Btn">Create Nft</Link>
                    <Link to={`/collections/create/${id}`} className="Btn">Create Collection</Link>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserDetails));