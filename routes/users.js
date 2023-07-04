const express = require("express");
const router = express.Router();
const User = require("../schemas/users.js");

//회원가입
router.post("/signup", async (req, res) => {
  const { email, nickname, password } = req.body;
  const user = new User({ email, nickname, password });
  await user.save();
  res.send("회원가입 완료");
});

module.exports = router;
