import { Router } from "express";

const subscriptionRouter = Router();

subscriptionRouter.get("/", (req, res) => {
  return res.status(200).send({
    title: "get all subscriptions",
  });
});

subscriptionRouter.get("/:id", (req, res) => {
  return res.status(200).send({
    title: "get subscription details",
  });
});

subscriptionRouter.post("/", (req, res) => {
  return res.status(200).send({
    title: "create new subscription",
  });
});

subscriptionRouter.put("/:id", (req, res) => {
  return res.status(200).send({
    title: "update subscription",
  });
});

subscriptionRouter.delete("/:id", (req, res) => {
  return res.status(200).send({
    title: "delete subscription",
  });
});

subscriptionRouter.get("/user/:id", (req, res) => {
  return res.status(200).send({
    title: "get subscription for a user",
  });
});

subscriptionRouter.put("/:id/cancel", (req, res) => {
  return res.status(200).send({
    title: "cancel a subscription",
  });
});

subscriptionRouter.get("/upcoming-renewals", (req, res) => {
  return res.status(200).send({
    title: "get upcoming subscription renewals",
  });
});

export default subscriptionRouter;
