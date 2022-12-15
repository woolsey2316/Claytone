/**
 * Define middlerware for extracting authToken
 * @author David Woolsey <woolsey2316@gmail.com>
 */

import { NextFunction, Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';

import config from '../../config';

interface AuthRequest extends Request {
  isAuth: boolean;
  userId: string;
}

const auth = (req: AuthRequest, res: Response, next: NextFunction) => {
  const authHeader = req.get('Authorization');
  if (!authHeader) {
    req.isAuth = false;
    return next();
  }
  const token = authHeader.split(' ')[1];
  if (!token || token === '') {
    req.isAuth = false;
    return next();
  }
  let decodedToken: string | jwt.JwtPayload;
  try {
    decodedToken = jwt.verify(token, config.jwtSecret);
    if (typeof decodedToken === 'string') {
      throw 'decodedToken must be object with userID field';
    }
  } catch (err) {
    req.isAuth = false;
    return next();
  }
  if (!decodedToken) {
    req.isAuth = false;
    return next();
  }
  req.isAuth = true;

  req.userId = decodedToken.userId;
  return next();
};

export default auth;
