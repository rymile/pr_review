const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const port = 3001;
const postRouter = require("./routes/posts.js");
const commentRouter = require("./routes/comments.js");
const authRouter = require("./routes/auth.js");
const userRouter = require("./routes/users.js");
const connect = require("./schemas");
connect();

app.use(express.json());
app.use(cookieParser);
app.use("/api", [postRouter, commentRouter, authRouter, userRouter]);

app.get("/", (req, res) => {
  res.send("개인 과제 복습 프로젝트입니다.");
});

app.listen(port, () => {
  console.log(port, "포트로 서버가 열렸어요!");
});
