const { Schema, model } = require('mongoose');

const collectionSchema = new Schema({
    author_id: {type: Schema.Types.ObjectID, ref: "User", require: true},
    name: {type: String, require: true, unique: true},
    img_url: String,
    url: String,
    created_date: Date
});

module.exports = model('Collection', collectionSchema);