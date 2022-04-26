import { Response, Request, NextFunction } from "express";
import * as bcrypt from "bcrypt";
import User from "../models/User";

export const getAllUsesrs = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const allUsers = await User.find();
  res.json(allUsers);
};

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  const user = new User({
    username: req.body.username,
    password: hashedPassword,
  });
  const savedUser = await user.save((err: any) => {
    if (err) {
      if (err.code === 11000) {
        return res
          .status(500)
          .send({ succes: false, message: "User already exist!" });
      }
      return res.status(500).send(err);
    }
    res.json(savedUser).status(201);
  });
};
