const express = require("express");
const app = express();
const port = 3001;
const commentRouter = require("./routes/comments.js");
const postRouter = require("./routes/posts.js");
const connect = require("./schemas");
connect();

app.use(express.json());
app.use("/api", [commentRouter, postRouter]);

app.get("/", (req, res) => {
  res.send("개인 과제 복습 프로젝트입니다.");
});

app.listen(port, () => {
  console.log(port, "포트로 서버가 열렸어요!");
});
