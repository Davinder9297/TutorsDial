import { IUser } from '../../user/user.model'; // adjust path to your IUser

declare global {
  namespace Express {
    interface Request {
      user?: IUser;
    }
  }
}
