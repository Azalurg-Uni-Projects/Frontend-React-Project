import { connect } from "react-redux"; 
import { getUsers } from "../../ducks/users/selectors";
import { deleteUser } from "../../ducks/users/operations";

const UserDetails = ({ users, deleteUser } ,props) => {
    let id = window.location.pathname.slice(15)
    const user = users.find(user => user._id === id)
    //console.log(props.match.params.id);

    return(
        <div>
            <h1>Users Details</h1>
            <section>
                {user.nickname}
            </section>
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

export default connect(mapStateToProps, mapDispatchToProps)(UserDetails);