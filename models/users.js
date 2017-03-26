var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    autoIncrement = require('mongoose-auto-increment');

var connection = mongoose.createConnection("mongodb://localhost:27017/fb");

autoIncrement.initialize(connection);

var userSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    name: String,
    photo: String
});

userSchema.plugin(autoIncrement.plugin, 'Users');
var Users = connection.model('Users', userSchema);

module.exports = Users;