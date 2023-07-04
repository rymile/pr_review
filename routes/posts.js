const express = require("express");
const router = express.Router();
const Post = require("../schemas/posts.js");
const mongoose = require("mongoose");
const { ObjectId } = mongoose.Types;
const authMiddleware = require("../middlewares/auth-middlewares.js");

//게시물 조회
router.get("/posts", async (req, res) => {
  const posts = await Post.find();
  res.send(posts);
});

// 게시물 상세조회
router.get("/posts/:id", async (req, res) => {
  const { id } = req.params;
  const post = await Post.findById(id);
  res.send(post);

  // try {
  //   const post = await Post.findById(id);
  //   if (!post) {
  //     return res.status(404).json({ message: "게시물을 찾을 수 없습니다." });
  //   }
  //   res.send(post);
  // } catch (error) {
  //   res.status(500).json({ message: "서버 오류입니다." });
  // }
});

//게시물 작성
router.post("/posts", async (req, res) => {
  const { user, title, content } = req.body;
  await Post.create({ user, title, content });
  res.status(200).json({ message: "게시글을 생성했습니다." });
});

//게시물 수정
router.put("/posts/:id", async (req, res) => {
  const { id } = req.params;
  const { user, title, content } = req.body;

  try {
    const post = await Post.findById(id);
    if (!post) {
      return res.status(404).json({ message: "게시물을 찾을 수 없습니다." });
    }

    // 게시물 작성자와 로그인한 사용자가 동일한지 확인합니다.
    if (String(post.user) !== String(req.user._id)) {
      return res
        .status(403)
        .json({ message: "게시물을 수정할 권한이 없습니다." });
    }

    await Post.updateOne({ _id: id }, { user, title, content });
    res.status(200).json({ message: "게시글을 수정했습니다." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "서버 오류입니다." });
  }
});

//게시물 삭제
router.delete("/posts/:id", async (req, res) => {
  const { id } = req.params;
  await Post.deleteOne({ _id: id });
  res.status(200).json({ message: "게시글을 삭제했습니다." });
});

module.exports = router;
