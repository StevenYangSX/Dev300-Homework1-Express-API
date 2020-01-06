const mongoose = require("mongoose");

const UsersSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    location: String,
    bio: String,
    avatarUrl: {
        type: String,
        default: "http://www.shixinyang.com"
    }
});

module.exports = mongoose.model("Users", UsersSchema);