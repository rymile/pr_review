const mongoose = require("mongoose");

const commentsSchema = new mongoose.Schema({
  commentId: {
    type: Number,
  },
  nickname: {
    type: String,
  },
  content: {
    type: String,
  },
});

module.exports = mongoose.model("Comment", commentsSchema);
