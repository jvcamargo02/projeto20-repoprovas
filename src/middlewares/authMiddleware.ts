import dotenv from 'dotenv';
import { NextFunction, Request, Response } from 'express';
import jwt, { Secret } from 'jsonwebtoken';
dotenv.config();

import * as userService from '../services/usersServices';

export async function ensureAuthenticatedMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authorization = req.headers['authorization'];
  if (!authorization) throw { type: "unauthorized", message: 'Missing authorization header'};

  const token = authorization.replace('Bearer ', '');
  if (!token) throw {type: "unauthorized", message: "Missing token"};

  try {
    const { userId } = jwt.verify(token, process.env.JWT_SECRET as Secret) as { userId: number}
    const user = await userService.findUserById(userId);
    res.locals.user = user;
    next();
  } catch {
    throw {type: "unauthorized", message: "Invalid token"};
  }
}
