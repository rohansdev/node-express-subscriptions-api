import { Router } from "express";
import { getUsers, getUser } from "../controllers/user.controller.js";
import authorize from "../middlewares/auth.middleware.js";

const userRouter = Router();

userRouter.get("/", getUsers);

userRouter.get("/:id", authorize, getUser);

userRouter.post("/", (req, res) => {
  return res.status(200).send({
    title: "create a new user",
  });
});

userRouter.put("/:id", (req, res) => {
  return res.status(200).send({
    title: "update a user",
  });
});

userRouter.delete("/:id", (req, res) => {
  return res.status(200).send({
    title: "delete user",
  });
});

export default userRouter;
