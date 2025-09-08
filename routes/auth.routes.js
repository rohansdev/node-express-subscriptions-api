import { Router } from "express";

const authRouter = Router();

authRouter.post("/sign-up", (req, res) => {
  return res.send({
    title: "Sign up",
  });
});

authRouter.post("/sign-in", (req, res) => {
  return res.status(200).send({
    title: "Sign in",
  });
});

authRouter.post("/sign-out", (req, res) => {
  res.status(200).send({
    title: "Sign out",
  });
});

export default authRouter;
