/**
 * Define middlerware for extracting authToken
 * @author David Woolsey <woolsey2316@gmail.com>
 */

import { NextFunction, Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';

import config from '../../config';

const auth = (req: Request, _res: Response, next: NextFunction) => {
  const authHeader = req.get('Authorization');
  if (!authHeader) {
    req.body.isAuth = false;
    return next();
  }
  const token = authHeader.split(' ')[1];
  if (!token || token === '') {
    req.body.isAuth = false;
    return next();
  }
  let decodedToken: string | jwt.JwtPayload;
  try {
    decodedToken = jwt.verify(token, config.jwtSecret);
    if (typeof decodedToken === 'string') {
      throw new Error('decodedToken must be object with userID field');
    }
  } catch (err) {
    req.body.isAuth = false;
    return next();
  }
  if (!decodedToken) {
    req.body.isAuth = false;
    return next();
  }
  req.body.isAuth = true;

  req.body.userId = decodedToken.userId;
  return next();
};

export default auth;
