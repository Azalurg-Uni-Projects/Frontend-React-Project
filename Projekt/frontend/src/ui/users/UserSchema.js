import * as Yup from 'yup';
const today = new Date();

export const userSchema = Yup.object().shape({
    nickname: Yup.string().required(),
    firstname: Yup.string(),
    lastname: Yup.string(),
    place_of_origin: Yup.string(),
    emial: Yup.string().email().required(),
    phone_number: Yup.string(),
    birthday: Yup.date().max(today).required(),
    url: Yup.string().url(),
    logo_url: Yup.string().url(),
    description: Yup.string()
})