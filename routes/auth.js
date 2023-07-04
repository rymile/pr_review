const jwt = require("jsonwebtoken");
const express = require("express");
const router = express.Router();
const User = require("../schemas/users");

// 로그인 API
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user || password !== user.password) {
    res.status(400).json({
      errorMessage: "이메일 또는 패스워드가 틀렸습니다.",
    });
    return;
  }

  const token = jwt.sign({ userId: user._id }, "customized-secret-key");

  res.cookie("Authorization", `Bearer ${token}`, { httpOnly: true }); // 'Authorization' 쿠키를 설정합니다.
  res.status(200).json({ token });
});

module.exports = router;
