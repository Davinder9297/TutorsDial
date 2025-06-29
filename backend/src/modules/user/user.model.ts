import mongoose, { Document, Schema } from 'mongoose';

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  role: 'student' | 'tutor';
  isActive: boolean;
  profileImageUrl?: string;
photoIdUrl?: string;
degreeCertificatesUrls?: string[];
fullName?: string;
bio?: string;
phoneNumber?: string;
isEmailVerified: boolean;
isPhoneVerified: boolean;
}

const userSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true,index:true },
    password: { type: String, required: true },
    role: { type: String, enum: ['student', 'tutor'], required: true },
    isActive: { type: Boolean, default: false },
    profileImageUrl: { type: String },
    photoIdUrl: { type: String },
    degreeCertificatesUrls: { type: [String] },
    bio: { type: String },
    phoneNumber: { type: String,required:true },
    isEmailVerified: { type: Boolean, default: false },
    isPhoneVerified: { type: Boolean, default: false },

  },
  { timestamps: true }
);

export const User = mongoose.model<IUser>('User', userSchema);
