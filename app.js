import express from "express";
import cookieParser from "cookie-parser";
import logger from "morgan";
import { PORT, API_VERSION } from "./config/env.js";
import authRouter from "./routes/auth.routes.js";
import userRouter from "./routes/user.routes.js";
import subscriptionRouterRouter from "./routes/subscription.routes.js";
import connectToDb from "./database/mongodb.js";
import errorMiddleware from "./middlewares/error.middleware.js";
import arcjetMiddleware from "./middlewares/arcjet.middleware.js";
import workflowRouter from "./routes/workflow.routes.js";

const app = express();

//middlewares
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//use routes
app.use(`/api/${API_VERSION}/auth`, authRouter);
app.use(`/api/${API_VERSION}/users`, userRouter);
app.use(`/api/${API_VERSION}/subscriptions`, subscriptionRouterRouter);
app.use(`/api/${API_VERSION}/workflows`, workflowRouter);

//custom middlewares
app.use(errorMiddleware);
app.use(arcjetMiddleware);

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Hello from API.",
  });
});

app.listen(PORT, async () => {
  console.log(`API running on http://localhost:${PORT}/api/${API_VERSION}`);

  await connectToDb();
});
