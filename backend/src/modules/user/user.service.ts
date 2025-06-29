import { User, IUser } from './user.model';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'
dotenv.config()
// FORCE CAST JWT_SECRET to correct type
const JWT_SECRET = process.env.JWT_SECRET as string;

if (!JWT_SECRET) {
  throw new Error('JWT_SECRET is not defined in environment variables');
}

export const generateToken = (user: any): string => {
  const payload = {
    id: user?._id.toString(),
    email: user.email,
    role: user.role,
  };

  const options: any = {
    expiresIn: process.env.JWT_EXPIRES_IN || '7d',
  };

  return jwt.sign(payload, JWT_SECRET, options); // ✅ Exact overload match
};
export const createUser = async (data: IUser) => {
  const hashedPassword = await bcrypt.hash(data.password, 10);
  const user = new User({ ...data, password: hashedPassword });
  return await user.save();
};

export const findUserByEmail = async (email: string) => {
  return await User.findOne({ email });
};
