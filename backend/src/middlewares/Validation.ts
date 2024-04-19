/* eslint-disable consistent-return */
import { Request, Response, NextFunction } from 'express';

class Validations {
  static validateLogin(req: Request, res: Response, next: NextFunction): Response | void {
    const { email, password } = req.body;

    if (!email || typeof email !== 'string') {
      return res.status(400).json({ message: 'Invalid email' });
    }

    if (!password || typeof password !== 'string') {
      return res.status(400).json({ message: 'Invalid password' });
    }

    next();
  }
}

export default Validations;
