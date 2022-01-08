import { connect } from "react-redux"; 
import { getCollections } from "../../ducks/collections/selectors";

const CollectionList = ({ collections, getCollectionList } ,props) => {

    return(
        <div>
            <h1>Collections List</h1>
            <div className="List">
                {collections ? collections.map(collection =>(
                    <div key={collection._id} className="ListContainer">
                    <img className="Small-img" src={collection.img_url} alt = "COLLECTION NOT FOUND"/>
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