import { Field, Form, Formik, ErrorMessage } from 'formik';
import { connect } from 'react-redux';
import { createNft } from '../../ducks/nfts/operations';
import { withRouter } from "react-router";
import { nftSchema } from './NftSchema';
import { Link } from "react-router-dom";

const NftCreate = ({ createNft, history }, props) => {
    let id = window.location.pathname.slice(13)
    const handleSubmit = (values) => {
        createNft(values, id);
        history.push('/nfts')
    }

    return (
        <div>
            <h3>Create Nft</h3>
            <Formik
                initialValues={{
                    title: "",
                    price: 0,
                    currency: "ETH",
                    image_url: "",
                    url: "",
                    description: ""
                }}
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
                        <Link to={`/users/details/${id}`}className="Btn">Back</Link>
                        <button type="submit" className="Btn">Create</button>
                    </div>
                </Form>
            </Formik>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {};   
}

const mapDispatchToProps = ({
    createNft
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NftCreate));