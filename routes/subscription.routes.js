import { Router } from "express";
import authorize from "../middlewares/auth.middleware.js";
import {
  createSubscription,
  getUserSubscriptions,
} from "../controllers/subscription.controller.js";

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

subscriptionRouter.post("/", authorize, createSubscription);

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

subscriptionRouter.get("/user/:id", authorize, getUserSubscriptions);

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
