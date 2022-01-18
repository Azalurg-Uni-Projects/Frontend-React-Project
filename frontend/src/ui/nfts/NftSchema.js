import * as Yup from 'yup';

export const nftSchema = Yup.object().shape({
    title: Yup.string().required(),
    price: Yup.number().required().positive(),
    currency: Yup.string().required(),
    url: Yup.string().url(),
    image_url: Yup.string().url().required(),
    description: Yup.string()
})