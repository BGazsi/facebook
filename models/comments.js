var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    autoIncrement = require('mongoose-auto-increment'),
    connection = mongoose.createConnection("mongodb://localhost:27017/fb");

autoIncrement.initialize(connection);

var commentSchema = new Schema({
    id: Number,
    user: Object,
    time: Number,
    desc: String
});

commentSchema.plugin(autoIncrement.plugin, 'Comments');
var Comments = connection.model('Users', commentSchema);

module.exports = Comments;