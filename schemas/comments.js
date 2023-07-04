const mongoose = require("mongoose");

const commentsSchema = new mongoose.Schema({
  postId: {
    type: mongoose.Schema.Types.ObjectId,
    res: "Post",
  },
  user: {
    type: String,
  },
  content: {
    type: String,
  },
});

module.exports = mongoose.model("Comment", commentsSchema);
