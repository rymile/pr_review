const jwt = require("jsonwebtoken");
const User = require("../schemas/users");

// 사용자 인증 미들웨어
module.exports = async (req, res, next) => {
  const { Authorization } = req.cookies || {}; // 쿠키가 정의되지 않았을 경우 빈 객체를 할당합니다.
  const [authType, authToken] = (Authorization || "").split(" ");

  if (!authToken || authType !== "Bearer") {
    res.status(401).send({
      errorMessage: "로그인 후 이용 가능한 기능입니다.",
    });
    return;
  }

  try {
    const { userId } = jwt.verify(authToken, "customized-secret-key");
    const user = await User.findById(userId);
    res.locals.user = user;
    next();
  } catch (error) {
    console.error(error);
    res.status(401).send({
      errorMessage: "로그인 후 이용 가능한 기능입니다.",
    });
  }
};
