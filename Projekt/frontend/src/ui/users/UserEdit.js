import { Field, Form, Formik } from 'formik';
import { connect } from 'react-redux';
import { editUser } from '../../ducks/users/operations';

// Dodać historię i walidację danych
const UserEdit = ({ editUser }, props) => {

    const handleSubmit = (values) => {
        editUser(values);
    }

    return (
        <div>
            <h3>Edit User</h3>
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
                            Edit
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
    editUser
});


export default connect(mapStateToProps, mapDispatchToProps)(UserEdit);