const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    userid: {
        type: String,
        required: true
    },
    SavedClubs: [{
        type: String
    }]
});

const UserModel = mongoose.model('users', UserSchema);
module.exports = UserModel;