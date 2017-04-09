var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    autoIncrement = require('mongoose-auto-increment'),
    connection = mongoose.createConnection("mongodb://localhost:27017/fb");

autoIncrement.initialize(connection);

var postSchema = new Schema({
    id: Number,
    user: Object,
    time: Date,
    desc: String,
    img: String,
    comments: [Object]
});

postSchema.plugin(autoIncrement.plugin, 'Posts');
var Posts = connection.model('Posts', postSchema);

module.exports = Posts;