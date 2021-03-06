import { Field, Form, Formik, ErrorMessage } from 'formik';
import { connect } from 'react-redux';
import { createUser } from '../../ducks/users/operations';
import { withRouter } from "react-router";
import { userSchema } from './UserSchema';
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const UserCreate = ({ createUser, history }, props) => {
    const { t } = useTranslation();

    const handleSubmit = (values) => {  
        createUser(values);
        history.push('/users')
    }

    return (
        <div>
            <h3>{t("Create User")}</h3>
            <Formik
                initialValues={{
                    nickname: '',
                    firstname: '',
                    lastname: "",
                    place_of_origin: "",
                    emial: "",
                    phone_number: "",
                    birthday: "",
                    url: "",
                    logo_url: "",
                    description: ""
                }}
                onSubmit={(values) => handleSubmit(values)}
                enableReinitialize={true}
                validationSchema={userSchema}>

<Form className="Input">
                    <ol className="Left">
                        <li>
                            <label htmlFor="nickname">{t("Nickname")}: </label>  
                            <Field name="nickname" type="text" id="nickname"/>  
                            <ErrorMessage name="nickname" component="p" className='Delete'/> 
                        </li>
                        <li>
                            <label htmlFor="firstname">{t("Firstname")}: </label>  
                            <Field name="firstname" type="text" id="firstname"/>  
                            <ErrorMessage name="firstname" component="p" className='Delete'/>
                        </li>
                        <li>
                            <label htmlFor="lastname">{t("Lastname")}: </label>  
                            <Field name="lastname" type="text" id="lastname"/>  
                            <ErrorMessage name="lastname" component="p" className='Delete'/> 
                        </li>
                        <li>
                            <label htmlFor="place_of_origin">{t("Place of origin")}: </label>  
                            <Field name="place_of_origin" type="text" id="place_of_origin"/>  
                            <ErrorMessage name="place_of_origin" component="p" className='Delete'/> 
                        </li>   
                    </ol>
                    <ol className="Right">
                        <li>
                            <label htmlFor="phone_number">{t("Phone number")}: </label>  
                            <Field name="phone_number" type="tel" placeholder="123-456-789" pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}" id="phone_number"/>  
                            <ErrorMessage name="phone_number" component="p" className='Delete'/> 
                        </li>
                        <li>
                            <label htmlFor="birthday">{t("Birthday")}: </label>  
                            <Field name="birthday" type="date" id="birthday"/>  
                            <ErrorMessage name="birthday" component="p" className='Delete'/>
                        </li>
                        <li>
                            <label htmlFor="url">Url: </label>  
                            <Field name="url" type="text" id="url"/>  
                            <ErrorMessage name="url" component="p" className='Delete'/>
                        </li>
                        <li>
                            <label htmlFor="logo_url">Logo url: </label>  
                            <Field name="logo_url" type="text" id="logo_url"/>  
                            <ErrorMessage name="logo_url" component="p" className='Delete'/> 
                        </li>
                    </ol>
                    <div className="Email">
                        <label htmlFor="email">Emial: </label>  
                        <Field name="email" type="email" placeholder="email@example.com" id="email"/>  
                        <ErrorMessage name="email" component="p" className='Delete'/> 
                    </div>
                    <div className="Description">
                        <label htmlFor="description">{t("Description")}: </label>  
                        <Field name="description" type="text" id="description"/>  
                        <ErrorMessage name="description" component="p" className='Delete'/> 
                    </div>
                    <div className="Submit">
                        <Link to={`/users`}className="Btn">{t("Back")}</Link>
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
    createUser
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserCreate));