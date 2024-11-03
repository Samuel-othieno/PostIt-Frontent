import express from "express";
import userRouter from "./routes/userRouter";
import chatRouter from "./routes/chatRouter";
import downloadRouter from "./routes/downloadRouter";
import messageRouter from "./routes/messageRouter";
import cors from "cors";
import cookieParser from "cookie-parser";
import globalErrorHandler from "./utils/errorController";
import AppError from "./utils/AppError";



const app = express();
const allowedOrigins = [
  "http://localhost:3000",
  "https://chat-box-samarthkadam.vercel.app",
];
app.use(
  cors({
    origin: "*",
  })
);
app.use(cookieParser());
app.use(express.json());
app.use(express.static("public/img/user"));

app.use("/api/v1/users", userRouter);
app.use("/api/v1/chat", chatRouter);
app.use("/api/v1/message", messageRouter);
app.use("/api/v1/download", downloadRouter);

app.all("*", (req, res, next) => {
  next(new AppError("TypeError", 404));
});

app.use(globalErrorHandler);

module.exports = app;
