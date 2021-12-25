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
//-----------------------------------------------------------
    join_date: {type: Date, require: true},
    created_nft_id: [{type: Schema.Types.ObjectID, ref: "Nft"}],
    colected_nft_id: [{type: Schema.Types.ObjectID, ref: "Nft"}],
    created_collection_id: [{type: Schema.Types.ObjectID, ref: "Collection"}]
    
});

module.exports = model('User', userSchema);