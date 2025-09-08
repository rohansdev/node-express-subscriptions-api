import { Router } from "express";

const userRouter = Router();

userRouter.get("/", (req, res) => {
  return res.status(200).send({
    title: "get all users",
  });
});

userRouter.get("/:id", (req, res) => {
  const id = req.body.id;

  return res.status(200).send({
    title: "get user details with " + id,
  });
});

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
