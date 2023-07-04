const jwt = require("jsonwebtoken");
const express = require("express");
const router = express.Router();
const User = require("../schemas/users.js");

//로그인 API
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user || password !== user.password) {
    res.status(400).json({
      message: "이메일 또는 패스워드가 틀렸습니다.",
    });
    return;
  }
  const token = jwt.sign({ userId: user._id }, "secret");
  res.cookie("Auth", `Bearer ${token}`);
  res.status(200).json({ token });
});

module.exports = router;
