import { connect } from "react-redux"; 
import { getUsers } from "../../ducks/users/selectors";
import { Link } from "react-router-dom";
import { sortUser } from "../../ducks/users/operations";
import { useTranslation } from "react-i18next";

const UserList = ({ users, sortUser } ,props) => {

    const _ = require('lodash');
    const { t } = useTranslation();

    const sort = (x) => {
        const users_sorted = _.chain(_.sortBy(users,[x])).forEach().value()
        sortUser(users_sorted)
    }

    return(
        <div>
            <h1>{t("Users List")}</h1>
            <ul className="sortbar">
                <li>
                    <label htmlFor="sort">
                        {t("Sort")}:
                    </label>
                    <select id="sort" onChange={(x) => (sort(x.target.value))}>
                        <option value="_id">-------------</option>
                        <option value="nickname">{t("nickname")}</option>
                        <option value="registration_date">{t("join date")}</option>
                        <option value="birthday">{t("birthday")}</option>
                    </select>
                </li>
                <li>
                    <Link to={'/users/create'} className="Btn">{t("Create User")}</Link>
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
                )) : <></>}
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