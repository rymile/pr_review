const mongoose = require("mongoose");

const postsSchema = new mongoose.Schema({
  postId: {
    type: Number,
  },
  title: {
    type: String,
  },
  content: {
    type: String,
  },
  nickname: {
    type: String,
  },
});

module.exports = mongoose.model("Post", postsSchema);
