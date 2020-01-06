const mongoose = require("mongoose");

const TweetsSchema = mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    imgUrl: String,
    Author: {
        type: Schema.Types.ObjectId,
        ref: "Users",
        required: true
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now()
    }
});

module.exports = mongoose.model("Tweets", TweetsSchema);