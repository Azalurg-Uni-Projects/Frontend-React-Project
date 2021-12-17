const { Schema, model } = require('mongoose');

const nftSchema = new Schema({
    author_id: {type: Schema.Types.ObjectID, ref: "User", require: true},
    owner_id: {type: Schema.Types.ObjectID, ref: "User", require: true},
    collection_id: {type: Schema.Types.ObjectID, ref: "Collection"},
    title: {type: String, require: true, unique: true},
    created_date: {type: Date, require: true},
    price: {type: Number, require: true},
    currency: {type: String, require: true},
    image_url: {type: String, require: true, unique: true},
    url: String,
    description: String

});

module.exports = model('Post', nftSchema);