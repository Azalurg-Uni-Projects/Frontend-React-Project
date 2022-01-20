import { connect } from "react-redux"; 
import { getCollections } from "../../ducks/collections/selectors";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next"

const CollectionList = ({ collections } ,props) => {
    const { t } = useTranslation()

    return(
        <div>
            <h1>{t("Collections List")}</h1>
            <div className="List">
                {collections ? collections.map(collection =>(
                    <div key={collection._id} className="ListContainer">
                        <Link to={`/collections/details/${collection._id}`}>
                            <img className="Small-img" src={collection.img_url} alt = "COLLECTION NOT FOUND"/>
                        </Link>
                        <p>{collection.name}</p>
                    </div>
                )) : <></>}
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