// src/middlewares/auth.middleware.ts
import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { User, IUser } from '../modules/user/user.model';

export interface AuthRequest extends Request {
  user?: any;
}

export const authenticate = async (req: AuthRequest, res: Response, next: NextFunction) => {
  const token:any = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
     res.status(401).json({ error: 'Access denied. No token provided.' });
  }

  try {
    const secret = process.env.JWT_SECRET;
    if (!secret) throw new Error('JWT secret not defined');

    const decoded = jwt.verify(token, secret) as JwtPayload;

    if (!decoded || typeof decoded !== 'object' || !decoded.id) {
       res.status(401).json({ error: 'Invalid token payload.' });
    }

    const user = await User.findById(decoded.id).select('-password');
    if (!user) {
       res.status(404).json({ error: 'User not found.' });
    }

    req.user = user;
    next();
  } catch (err) {
     res.status(401).json({ error: 'Invalid or expired token.' });
  }
};
