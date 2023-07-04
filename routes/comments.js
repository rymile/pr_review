const express = require("express");
const router = express.Router();
const Comment = require("../schemas/comments.js");
const Post = require("../schemas/posts.js");
const mongoose = require("mongoose");
const { ObjectId } = mongoose.Types;

//댓글 조회
router.get("/comment", async (req, res) => {
  const comment = await Comment.find();
  res.send(comment);
});

// 댓글 조회
router.get("/comment/:postId", async (req, res) => {
  const { postId } = req.params;
  const comments = await Comment.find({ postId });
  res.send(comments);
});

// 댓글 작성
router.post("/comment/:postId", async (req, res) => {
  const { postId } = req.params;
  const { user, content } = req.body;
  await Comment.create({ postId, user, content });
  res.send("댓글이 작성되었습니다.");
});

//댓글 수정
router.put("/comment/:id", async (req, res) => {
  const { id } = req.params;
  const { user, content } = req.body;

  await Comment.updateOne({ _id: id }, { user, content });
  res.status(200).json({ message: "댓글을 수정했습니다." });
});

//댓글 삭제
router.delete("/comment/:id", async (req, res) => {
  const { id } = req.params;
  await Comment.deleteOne({ _id: id });
  res.status(200).json({ message: "댓글을 삭제했습니다." });
});

module.exports = router;
