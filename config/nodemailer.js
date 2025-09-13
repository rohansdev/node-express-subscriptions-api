import nodemailer from "nodemailer";
import { EMAIL_SERVICE, EMAIL_USER, EMAIL_PASSWD } from "./env.js";

const transporter = nodemailer.createTransport({
  service: EMAIL_SERVICE,
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASSWD,
  },
});

export default transporter;