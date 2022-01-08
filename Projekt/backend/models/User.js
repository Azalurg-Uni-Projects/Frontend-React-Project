const { Schema, model } = require('mongoose');

// Schema domyślnie dodaje unikalne pole _id, dlatego pomijamy je w deklaracji
const userSchema = new Schema({
    nickname: {type: String, require: true, unique: true},
    firstname: String,
    lastname: String,
    email: {type: String, require: true, unique: true},
    phone_number: String,
    place_of_origin: String,
    logo_url: String,
    url: String,
    description: String,
    birthday: Date,
    registration_date: {type: Date, require: true}
});

module.exports = model('User', userSchema);