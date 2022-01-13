import { Field, Form, Formik } from 'formik';
import { connect } from 'react-redux';
import { createNft } from '../../ducks/nfts/operations';

// Dodać historię i walidację danych
const NftCreate = ({ createNft }, props) => {

    const handleSubmit = (values) => {
        createNft(values);
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
                enableReinitialize={true}>
                    <Form>
                        <Field name="name" />
                        <Field name="nftname" />
                        <button type="submit">
                            Create
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
    createNft
});


export default connect(mapStateToProps, mapDispatchToProps)(NftCreate);