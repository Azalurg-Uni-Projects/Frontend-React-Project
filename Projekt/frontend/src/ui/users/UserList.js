import { connect } from "react-redux"; 
import { getUsers } from "../../ducks/users/selectors";
import { Link } from "react-router-dom";
import { sortUser } from "../../ducks/users/operations";

const _ = require('lodash');

const UserList = ({ users, sortUser } ,props) => {

    const sort = (x) => {
        const users_sorted = _.chain(_.sortBy(users,[x])).forEach().value()
        sortUser(users_sorted)
    }

    return(
        <div>
            <h1>Users List</h1>
            <ul className="sortbar">
                <li>
                    <label htmlFor="sort">
                        Sort:
                    </label>
                    <select id="sort" onChange={(x) => (sort(x.target.value))}>
                        <option value="id">-------------</option>
                        <option value="nickname">nickname</option>
                        <option value="registration_date">join date</option>
                        <option value="birthday">birthday</option>
                    </select>
                </li>
                <li>
                    <Link to={'/users/create'} className="Btn">Create User</Link>
                </li>
            </ul>
            
            <div className="List">
                {users ? users.map(user =>(
                    <div key={user._id} className="ListContainer">
                        <Link to={`/users/details/${user._id}`}>
                            <img className="Small-img Circle" src={user.logo_url} alt = "USER NOT FOUND"/>
                        </Link>
                        <p>{user.nickname}</p>
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
    sortUser
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);