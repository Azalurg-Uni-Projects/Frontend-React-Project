const { Schema, model } = require('mongoose');

// Schema domyślnie dodaje unikalne pole _id, dlatego pomijamy je w deklaracji
const userSchema = new Schema({
    nickname: {type: String, require: true, unique: true},
    firstname: String,
    lastname: String,
    email: {type: String, require: true, unique: true},
    phone_number: String,
    place_of_origin: String,
    birthday: Date,
    registrationDate: {type: Date, require: true},
    created_nft_id: [{type: Schema.Types.ObjectID, ref: "Nft"}],
    colected_nft_id: [{type: Schema.Types.ObjectID, ref: "Nft"}],
    created_collection_id: [{type: Schema.Types.ObjectID, ref: "Collection"}],
    logo_url: String,
    description: String
});

module.exports = model('User', userSchema);