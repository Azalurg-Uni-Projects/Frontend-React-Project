import { Field, Form, Formik, ErrorMessage } from 'formik';
import { connect } from 'react-redux';
import { editUser } from '../../ducks/users/operations';
import { withRouter } from "react-router";
import { userSchema } from './UserSchema';
import { getUsers } from '../../ducks/users/selectors';


const UserEdit = ({ users, editUser, history }, props) => {
    let id = window.location.pathname.slice(12)
    const user = users.find(user => user._id === id)
    
    const handleSubmit = (values) => {
        editUser(values);
        history.push('/users')
    }

    return (
        <div>
            <h3>Edit User</h3>
            <Formik
                initialValues={user}
                onSubmit={(values) => handleSubmit(values)}
                enableReinitialize={true}
                validationSchema={userSchema}>

                <Form className="Input">
                    <ol className="Left">
                        <li>
                            <label htmlFor="nickname">Nickname: </label>  
                            <Field name="nickname" type="text" id="nickname"/>  
                            <ErrorMessage name="nickname" component="p" className='Delete'/> 
                        </li>
                        <li>
                            <label htmlFor="firstname">Firstname: </label>  
                            <Field name="firstname" type="text" id="firstname"/>  
                            <ErrorMessage name="firstname" component="p" className='Delete'/>
                        </li>
                        <li>
                            <label htmlFor="lastname">Lastname: </label>  
                            <Field name="lastname" type="text" id="lastname"/>  
                            <ErrorMessage name="lastname" component="p" className='Delete'/> 
                        </li>
                        <li>
                            <label htmlFor="place_of_origin">Place of origin: </label>  
                            <Field name="place_of_origin" type="text" id="place_of_origin"/>  
                            <ErrorMessage name="place_of_origin" component="p" className='Delete'/> 
                        </li>   
                    </ol>
                    <ol className="Right">
                        <li>
                            <label htmlFor="phone_number">Phone number: </label>  
                            <Field name="phone_number" type="text" id="phone_number"/>  
                            <ErrorMessage name="phone_number" component="p" className='Delete'/> 
                        </li>
                        <li>
                            <label htmlFor="birthday">Birthday: </label>  
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
                        <Field name="email" type="text" id="email"/>  
                        <ErrorMessage name="email" component="p" className='Delete'/> 
                    </div>
                    <div className="Description">
                        <label htmlFor="description">Description: </label>  
                        <Field name="description" type="text" id="description"/>  
                        <ErrorMessage name="description" component="p" className='Delete'/> 
                    </div>
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
        users: getUsers(state)
    };   
}

const mapDispatchToProps = ({
    editUser
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserEdit));