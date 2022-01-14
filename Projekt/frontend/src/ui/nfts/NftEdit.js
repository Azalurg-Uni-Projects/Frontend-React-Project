import { Field, Form, Formik, ErrorMessage } from 'formik';
import { connect } from 'react-redux';
import { editNft } from '../../ducks/nfts/operations';
import { withRouter } from "react-router";
import { nftSchema } from './NftSchema';
import { getNfts } from '../../ducks/nfts/selectors';

const NftEdit = ({ editNft, history, nfts }, props) => {
    let id = window.location.pathname.slice(11)
    const nft = nfts.find(nft => nft._id === id)

    const handleSubmit = (values) => {
        editNft(values);
        history.push('/nfts')
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
                    </ol>
                    <div className="Submit">
                        <button type="submit" className="Btn">Edit</button>
                    </div>
                </Form>
            </Formik>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        nfts: getNfts(state)
    };   
}

const mapDispatchToProps = ({
    editNft
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NftEdit));