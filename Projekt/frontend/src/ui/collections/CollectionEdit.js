import { Field, Form, Formik, ErrorMessage } from 'formik';
import { connect } from 'react-redux';
import { editCollection } from '../../ducks/collections/operations';
import { withRouter } from "react-router";
import { collectionSchema } from './CollectionSchema';
import { getCollections } from '../../ducks/collections/selectors';

const CollectionEdit = ({ editCollection, history, collections }, props) => {

    let id = window.location.pathname.slice(18)
    const collection = collections.find(collection => collection._id === id)

    const handleSubmit = (values) => {  
        editCollection(values);
        history.push('/collections')
    }

    return (
        <div>
            <h3>Edit Collection</h3>
            <Formik
                initialValues={collection}
                onSubmit={(values) => handleSubmit(values)}
                enableReinitialize={true}
                validationSchema={collectionSchema}>

                <Form className="Input">
                    <ol className="Left">
                        <li>
                            <label htmlFor="name">Name: </label>  
                            <Field name="name" type="text" id="name"/>  
                            <ErrorMessage name="name" component="p" className='Delete'/> 
                        </li>
                        <li>
                            <label htmlFor="img_url">Background img url: </label>  
                            <Field name="img_url" type="text" id="img_url"/>  
                            <ErrorMessage name="img_url" component="p" className='Delete'/>
                        </li>
                        <li>
                            <label htmlFor="url">Source url: </label>  
                            <Field name="url" type="text" id="url"/>  
                            <ErrorMessage name="url" component="p" className='Delete'/> 
                        </li>   
                    </ol>
                    <ol className='Right'>
                        <li>
                            
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
        collections: getCollections(state)
    };   
}

const mapDispatchToProps = ({
    editCollection
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CollectionEdit));