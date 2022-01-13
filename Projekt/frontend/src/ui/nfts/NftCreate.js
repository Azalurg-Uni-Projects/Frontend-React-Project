import { Field, Form, Formik, ErrorMessage } from 'formik';
import { connect } from 'react-redux';
import { createNft } from '../../ducks/nfts/operations';
import { withRouter } from "react-router";
import { nftSchema } from './NftSchema';

// Dodać historię i walidację danych
const NftCreate = ({ createNft, history }, props) => {

    const handleSubmit = (values) => {
        createNft(values);
        history.push('/nft')
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
                            <label htmlFor="title">Nickname: </label>  
                            <Field name="title" type="text" id="title"/>  
                            <ErrorMessage name="title" component="p" className='Delete'/> 
                        </li>
                        <li>
                            <label htmlFor="price">Nickname: </label>  
                            <Field name="price" type="text" id="price"/>  
                            <ErrorMessage name="price" component="p" className='Delete'/> 
                        </li>
                        <li>
                            <label htmlFor="currency">Nickname: </label>  
                            <Field name="currency" type="text" id="currency"/>  
                            <ErrorMessage name="currency" component="p" className='Delete'/> 
                        </li>
                    </ol>
                    <ol className="Right">
                        <li>
                            <label htmlFor="image_url">Nickname: </label>  
                            <Field name="image_url" type="text" id="image_url"/>  
                            <ErrorMessage name="image_url" component="p" className='Delete'/> 
                        </li>
                        <li>
                            <label htmlFor="url">Nickname: </label>  
                            <Field name="url" type="text" id="url"/>  
                            <ErrorMessage name="url" component="p" className='Delete'/> 
                        </li>
                        <li>
                            <label htmlFor="description">Nickname: </label>  
                            <Field name="description" type="text" id="description"/>  
                            <ErrorMessage name="description" component="p" className='Delete'/> 
                        </li>
                    </ol>
                    <div className="Submit">
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