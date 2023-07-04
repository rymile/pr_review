const express = require("express");
const router = express.Router();
const Post = require("../schemas/posts.js");
const mongoose = require("mongoose");

// 게시글 조회
// router.get("/posts", async (req, res) => {
//   try {
//     // 모든 게시글 가져오기
//     const posts = await Post.find();

//     // 조회된 게시글이 없는 경우
//     if (posts.length === 0) {
//       return res.status(200).json({ message: "조회된 게시글이 없습니다." });
//     }

//     // 조회된 게시글 반환
//     res.status(200).json({ message: "게시글을 조회했습니다.", posts });
//   } catch (error) {
//     console.error("게시글 조회 중 오류가 발생했습니다.", error);
//     res.status(500).json({ message: "게시글 조회 중 오류가 발생했습니다." });
//   }
// });

//게시물 조회
router.get("/posts", async (req, res) => {
  const posts = await Post.find();
  res.send(posts);
});

//게시물 작성
router.post("/posts", async (req, res) => {
  const { postId, title, content, nickname } = req.body;
  await Post.create({ postId, title, content, nickname });
  res.status(200).json({ message: "게시글을 생성했습니다." });
});

//게시물 수정
router.put("/posts/:id", async (req, res) => {
  const { id } = req.params;
  const { title, content, nickname } = req.body;

  await Post.updateOne({ _id: id }, { title, content, nickname });
  res.status(200).json({ message: "게시글을 수정했습니다." });
});

//게시물 삭제
router.delete("/posts/:id", async (req, res) => {
  const { id } = req.params;
  await Post.deleteOne({ _id: id });
  res.status(200).json({ message: "게시글을 삭제했습니다." });
});

module.exports = router;
