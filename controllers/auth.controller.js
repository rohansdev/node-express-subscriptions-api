import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
import { JWT_SECRET, JWT_EXPIRES_IN } from "../config/env.js";

export const signUp = async (req, res, next) => {
  const dbSession = await mongoose.startSession();
  dbSession.startTransaction();

  try {
    const { name, email, passwd } = req.body;

    const userExists = await User.findOne({ email });
    if (userExists) {
      const error = new Error("User already exists.");
      error.statusCode = 409;
      throw error;
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPasswd = await bcrypt.hash(passwd, salt);

    const newUsers = await User.create(
      [
        {
          name,
          email,
          passwd: hashedPasswd,
        },
      ],
      { dbSession }
    );

    const token = jwt.sign(
      {
        userId: newUsers[0]._id,
      },
      JWT_SECRET,
      { expiresIn: JWT_EXPIRES_IN }
    );

    await dbSession.commitTransaction();
    dbSession.endSession();

    res.status(201).json({
      success: true,
      message: "User created successfully",
      data: {
        token,
        user: newUsers[0],
      },
    });
  } catch (error) {
    await dbSession.abortTransaction();
    dbSession.endSession();
    next(error);
  }
};

export const signIn = async (req, res, next) => {
  try {
    const { email, passwd } = req.body;

    const user = await User.findOne({
      email,
    });

    if (!user) {
      const error = new Error("User not found.");
      error.statusCode = 404;
      throw error;
    }

    const isValidPassword = await bcrypt.compare(passwd, user.passwd);

    if (!isValidPassword) {
      const error = new Error("Incorrect password.");
      error.statusCode = 401;
      throw error;
    }

    const token = jwt.sign({ userId: user._id }, JWT_SECRET, {
      expiresIn: JWT_EXPIRES_IN,
    });

    return res.status(200).json({
      success: true,
      message: "Signed in successfully.",
      data: {
        user,
        token,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const signOut = async (req, res, next) => {
  //
};
