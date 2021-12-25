import {connect } from "react-redux"; 
import { getUsers } from "../../ducks/users/selectors";
import { deleteUser } from "../../ducks/users/operations"

const UserList = ({ users, deleteUser } ,props) => {

    

    return(
        <div>
            <h1>Users List</h1>
            <div className="List">
                {users ? users.map(user =>(
                    <div key={user._id} className="ListContainer">
                        <p>nickname: {user.nickname}</p>
                        <p>name: {user.firstname} {user.lastname}</p>
                        <button className="delete" onClick={() => deleteUser(user)}>Delete</button>
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