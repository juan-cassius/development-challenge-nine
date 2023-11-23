/* eslint-disable consistent-return */
import { NextFunction, Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';

export default class Auth {
  static handle(req:Request, res: Response, next: NextFunction) {
    const { authorization } = req.headers;

    if (!authorization) return res.status(401).json({ message: 'Token not found' });

    const [type, token] = authorization.split(' ');

    if (type !== 'Bearer') return res.status(401).json({ message: 'Token malformatted' });

    try {
      const payload = jwt.verify(token, process.env.JWT_SECRET || 'secret123');
      res.locals.user = payload;
      next();
    } catch (error) {
      return res.status(401).json({ message: 'Invalid token' });
    }
  }
}
