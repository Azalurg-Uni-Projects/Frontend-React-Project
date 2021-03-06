import { Field, Form, Formik, ErrorMessage } from 'formik';
import { connect } from 'react-redux';
import { createCollection } from '../../ducks/collections/operations';
import { withRouter } from "react-router";
import { collectionSchema } from './CollectionSchema';
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const CollectionCreate = ({ createCollection, history }, props) => {
    let id = window.location.pathname.slice(20)
    const { t } = useTranslation();

    const handleSubmit = (values) => {  
        createCollection(values, id);
        history.push('/collections')
    }

    return (
        <div>
            <h3>{t("Create Collection")}</h3>
            <Formik
                initialValues={{
                    name: "",
                    url: "",
                    img_url: ""
                }}
                onSubmit={(values) => handleSubmit(values)}
                enableReinitialize={true}
                validationSchema={collectionSchema}>

                <Form className="Input">
                    <ol className="Left">
                        <li>
                            <label htmlFor="name">{t("Name")}: </label>  
                            <Field name="name" type="text" id="name"/>  
                            <ErrorMessage name="name" component="p" className='Delete'/> 
                        </li>
                        <li>
                            <label htmlFor="img_url">{t("Background img url")}: </label>  
                            <Field name="img_url" type="text" id="img_url"/>  
                            <ErrorMessage name="img_url" component="p" className='Delete'/>
                        </li>
                        <li>
                            <label htmlFor="url">{t("Source url")}: </label>  
                            <Field name="url" type="text" id="url"/>  
                            <ErrorMessage name="url" component="p" className='Delete'/> 
                        </li> 
                    </ol>
                    <div className="Submit">
                        <Link to={`/users/details/${id}`}className="Btn">{t("Back")}</Link>
                        <button type="submit" className="Btn">{t("Create")}</button>
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
    createCollection
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CollectionCreate));