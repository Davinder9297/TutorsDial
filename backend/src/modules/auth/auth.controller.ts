import { Request, Response } from 'express';
import { handleForgotPassword, handleResetPassword } from './auth.service';

export const forgotPassword = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;
    if (!email)  res.status(400).json({ error: 'Email is required' });

    await handleForgotPassword(email);
    res.status(200).json({success:true, message: 'Reset link sent if user exists' });
  } catch (err) {
    console.log(err);
    
    res.status(500).json({success:false, message: 'Something went wrong', details: err });
  }
};

export const resetPassword = async (req: Request, res: Response) => {
  try {
    const { token } = req.params;
    const { password } = req.body;

    if (!password)  res.status(400).json({ error: 'Password is required' });

    await handleResetPassword(token, password);
    res.status(200).json({success:true, message: 'Password reset successful' });
  } catch (err:any) {
    res.status(400).json({success:false, message: err.message || 'Invalid token or server error' });
  }
};
