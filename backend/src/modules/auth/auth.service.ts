import crypto from 'crypto';
import bcrypt from 'bcryptjs';
import { User } from '../user/user.model';
import { sendMail } from '../../utils/email';
import { generateResetToken } from '../../utils/token';

export const handleForgotPassword = async (email: string) => {
  const user = await User.findOne({ email });
  if (!user) return;

  const { resetToken, hashed } = generateResetToken();
  user.resetPasswordToken = hashed;
  user.resetPasswordExpires = new Date(Date.now() + 15 * 60 * 1000); // 15 mins
  await user.save();

  const resetUrl = `${process.env.FRONTEND_URL}/reset-password/${resetToken}`;
  const html = `
    <p>Hello ${user.name},</p>
    <p>You requested a password reset.</p>
    <p><a href="${resetUrl}">Click here to reset your password</a></p>
    <p>This link will expire in 15 minutes.</p>
  `;

  await sendMail({
    to: user.email,
    subject: 'Reset Your Password',
    html
  });
};

export const handleResetPassword = async (token: string, newPassword: string) => {
  const hashedToken = crypto.createHash('sha256').update(token).digest('hex');

  const user = await User.findOne({
    resetPasswordToken: hashedToken,
    resetPasswordExpires: { $gt: new Date() }
  });

  if (!user) throw new Error('Invalid or expired token');

  user.password = await bcrypt.hash(newPassword, 10);
  user.resetPasswordToken = undefined;
  user.resetPasswordExpires = undefined;
  await user.save();
};
