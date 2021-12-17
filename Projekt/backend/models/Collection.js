const { Schema, model } = require('mongoose');

const collectionSchema = new Schema({
    author_id: {type: Schema.Types.ObjectID, ref: "User", require: true},
    name: {type: String, require: true, unique: true},
    created_date: Date,
    nft_id: [{type: Schema.Types.ObjectID, ref: "Nft"}],
    img_url: String,
    url: String
});

module.exports = model('Collection', collectionSchema);