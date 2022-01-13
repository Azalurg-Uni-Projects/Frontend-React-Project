import { Field, Form, Formik } from 'formik';
import { connect } from 'react-redux';
import { editNft } from '../../ducks/nfts/operations';

// Dodać historię i walidację danych
const NftEdit = ({ editNft }, props) => {

    const handleSubmit = (values) => {
        editNft(values);
    }

    return (
        <div>
            <h3>Edit Nft</h3>
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
                enableReinitialize={true}>
                    <Form>
                        <Field name="name" />
                        <Field name="nftname" />
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
    editNft
});


export default connect(mapStateToProps, mapDispatchToProps)(NftEdit);