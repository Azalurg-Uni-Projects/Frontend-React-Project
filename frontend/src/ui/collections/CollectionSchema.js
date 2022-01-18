import * as Yup from 'yup';

export const collectionSchema = Yup.object().shape({
    name: Yup.string().required(),
    url: Yup.string().url(),
    img_url: Yup.string().url(),
})