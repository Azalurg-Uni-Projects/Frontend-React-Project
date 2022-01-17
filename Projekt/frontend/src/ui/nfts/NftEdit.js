import { Field, Form, Formik, ErrorMessage } from 'formik';
import { connect } from 'react-redux';
import { editNft } from '../../ducks/nfts/operations';
import { withRouter } from "react-router";
import { nftSchema } from './NftSchema';
import { getNfts } from '../../ducks/nfts/selectors';
import { getCollections } from "../../ducks/collections/selectors";
import { getUsers } from "../../ducks/users/selectors";
import { Link } from "react-router-dom";


const NftEdit = ({ editNft, history, nfts, users, collections}, props) => {
    let id = window.location.pathname.slice(11)
    const nft = nfts.find(nft => nft._id === id)

    const handleSubmit = (values) => {
        editNft(values);
        history.push(`/nfts/details/${id}`)
    }

    return (
        <div>
            <h3>Edit Nft</h3>
            <Formik
                initialValues={nft}
                onSubmit={(values) => handleSubmit(values)}
                enableReinitialize={true}
                validationSchema={nftSchema}>
                <Form className="Input">
                <ol className="Left">
                        <li>
                            <label htmlFor="title">Title: </label>  
                            <Field name="title" type="text" id="title"/>  
                            <ErrorMessage name="title" component="p" className='Delete'/> 
                        </li>
                        <li>
                            <label htmlFor="price">Price: </label>  
                            <Field name="price" type="number" id="price"/>  
                            <ErrorMessage name="price" component="p" className='Delete'/> 
                        </li>
                        <li>
                            <label htmlFor="currency">Currency: </label>  
                            <Field name="currency" as="select" id="image_url">  
                                <option value="ETH">ETH</option>
                                <option value="USD">USD</option>
                                <option value="BTC">BTC</option>
                            </Field> 
                            <ErrorMessage name="currency" component="p" className='Delete'/> 
                        </li>
                        <li>
                            <label htmlFor="collection_id">Collection: </label>  
                            <Field name="collection_id" as="select" id="collection_id">
                            {collections ? collections.map(collection =>(
                                    <option key={collection._id} value={collection._id}>{collection.name}</option>
                            )): <> </>} 
                            </Field>
                            <ErrorMessage name="collection_id" component="p" className='Delete'/> 
                        </li>
                    </ol>
                    <ol className="Right">
                        <li>
                            <label htmlFor="image_url">Image url: </label>  
                            <Field name="image_url" type="text" id="image_url"/>  
                            <ErrorMessage name="image_url" component="p" className='Delete'/> 
                        </li>
                        <li>
                            <label htmlFor="url">Source url: </label>  
                            <Field name="url" type="text" id="url"/>  
                            <ErrorMessage name="url" component="p" className='Delete'/> 
                        </li>
                        <li>
                            <label htmlFor="description">Description: </label>  
                            <Field name="description" type="text" id="description"/>  
                            <ErrorMessage name="description" component="p" className='Delete'/> 
                        </li>
                        <li>
                            <label htmlFor="owner_id">Description: </label>  
                            <Field name="owner_id" as="select" id="owner_id">
                            {users ? users.map(user =>(
                                    <option key={user._id} value={user._id}>{user.nickname}</option>
                            )): <> </>} 
                            </Field>
                            <ErrorMessage name="owner_id" component="p" className='Delete'/> 
                        </li>
                    </ol>
                    <div className="Submit">
                        <Link to={`/nfts/details/${id}`}className="Btn">Back</Link>
                        <button type="submit" className="Btn">Edit</button>
                    </div>
                </Form>
            </Formik>
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

const mapDispatchToProps = ({
    editNft
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NftEdit));