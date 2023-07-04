const jwt = require("jsonwebtoken");
const User = require("../schemas/users.js");

module.exports = async (req, res, next) => {
  const cookies = req.cookies;
  if (!cookies || !cookies.Auth) {
    res.status(401).send({
      message: "로그인 후 사용 가능한 기능입니다.",
    });
    return;
  }

  const { authType, authToken } = (cookies.Auth || "0").split(" ");
  if (!authToken || authType !== "Bearer") {
    res.status(401).send({
      message: "로그인 후 사용 가능한 기능입니다.",
    });
    return;
  }

  try {
    const { nickname } = jwt.verify(authToken, "secret");
    const user = await User.findById(nickname);
    res.locals.user = user;
    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({
      message: "로그인 후 사용 가능한 기능입니다.",
    });
  }
};
