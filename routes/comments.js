const express = require("express");
const router = express.Router();
const Post = require("../schemas/posts.js");
const Comment = require("../schemas/posts.js");

// 댓글 목록 조회
router.get("/comment", (req, res) => {});

router.get("/comment/:commentId", (req, res) => {
  const { commentId } = req.params;
  const [detail] = Comment.filter(
    (comments) => comments.commentId === Number(commentId)
  );
  res.json({ detail });
});

const Comments = require("../schemas/comments.js");
router.post("/comment", async (req, res) => {
  const { commentId, nickname, content } = req.body;

  const comments = await Comment.find({ commentId });

  if (comments.length) {
    return res
      .status(400)
      .json({ success: false, errormessage: "이미 존재하는 commentId입니다." });
  }

  const crecom = await Comments.create({ commentId, nickname, content });

  res.json({ comments: crecom });
});

module.exports = router;
