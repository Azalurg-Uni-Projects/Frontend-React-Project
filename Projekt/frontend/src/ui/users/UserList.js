import { connect } from "react-redux"; 
import { getUsers } from "../../ducks/users/selectors";
import { deleteUser } from "../../ducks/users/operations";
import { Link } from "react-router-dom";

const UserList = ({ users, deleteUser } ,props) => {

    return(
        <div>
            <h1>Users List</h1>
            <div className="List">
                {users ? users.map(user =>(
                    <div key={user._id} className="ListContainer">
                        <Link to={`/users/details/${user._id}`}>
                            <img className="Small-img Circle" src={user.logo_url} alt = "USER NOT FOUND"/>
                        </Link>
                        <p>{user.nickname}</p>
                        <button className="Btn Delete" onClick={() => deleteUser(user)}>Delete</button>
                    </div>
                )) : <div>No one here</div>}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        users: getUsers(state)
    };
}
const mapDispatchToProps = {
    deleteUser
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);