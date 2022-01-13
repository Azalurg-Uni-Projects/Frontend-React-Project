import { Field, Form, Formik } from 'formik';
import { connect } from 'react-redux';
import { createUser } from '../../ducks/users/operations';

// Dodać historię i walidację danych
const UserForm = ({ createUser }, props) => {

    const handleSubmit = (values) => {
        createUser(values);
    }

    return (
        <div>
            <h3>Add User</h3>
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
                enableReinitialize={true}>
                    <Form>
                        <Field name="name" />
                        <Field name="username" />
                        <button type="submit">
                            Zatwierdz
                        </button>
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


export default connect(mapStateToProps, mapDispatchToProps)(UserForm);