import express from "express";
import connectDB from "./lib/connectDB.js";
import userRouter from "./routes/comment.route.js";
import postRouter from "./routes/post.route.js";
import commentRouter from "./routes/user.route.js";
import webhookRoute from "./routes/webhook.route.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use("/webhooks", webhookRoute);
app.use(express.json());

app.use("/users", userRouter);
app.use("/posts", postRouter);
app.use("/comments", commentRouter);

app.use((error, req, res, next) => {
  res.status(error.status || 500);

  res.json({
    message: error.message || "Something went Wrong!",
    status: error.status,
    stack: error.stack,
  });
});

app.listen(3000, () => {
  connectDB();
  console.log("server is running!");
});
