import { connect } from "react-redux"; 
import { getCollections } from "../../ducks/collections/selectors";
import { Link } from "react-router-dom";

const CollectionList = ({ collections } ,props) => {

    return(
        <div>
            <h1>Collections List</h1>
            <div className="List">
                {collections ? collections.map(collection =>(
                    <div key={collection._id} className="ListContainer">
                        <Link to={`/collections/details/${collection._id}`}>
                            <img className="Small-img" src={collection.img_url} alt = "COLLECTION NOT FOUND"/>
                        </Link>
                        <p>{collection.name}</p>
                    </div>
                )) : <div>No one here</div>}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        collections: getCollections(state)
    };
}
const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(CollectionList);