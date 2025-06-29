import { Request, Response } from 'express';
import { createUser, findUserByEmail, generateToken } from './user.service';
import bcrypt from 'bcryptjs';

export const register = async (req: Request, res: Response) => {
  try {
    const existing = await findUserByEmail(req.body.email);
    if (existing)  res.status(409).json({ error: 'Email already registered' });

    const files = req.files as {
      profileImage?: Express.Multer.File[];
      photoId?: Express.Multer.File[];
      degreeCertificates?: Express.Multer.File[];
    };

    // Set file URLs if present
    if (files?.profileImage?.[0]) {
      req.body.profileImageUrl = files.profileImage[0].path;
    }

    if (files?.photoId?.[0]) {
      req.body.photoIdUrl = files.photoId[0].path;
    }

    if (files?.degreeCertificates?.length) {
      req.body.degreeCertificatesUrls = files.degreeCertificates.map(file => file.path);
    }

    const user = await createUser(req.body);
     const token = generateToken(user);

     res.status(201).json({
      success:true,
      message: 'Registered successfully',
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        profileImageUrl: user.profileImageUrl,
        photoIdUrl: user.photoIdUrl,
        degreeCertificatesUrls: user.degreeCertificatesUrls
      },
      token
    });

  } catch (err) {
    console.error('Register error:', err);
     res.status(500).json({ success:false,message:"Registeration failed",});
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const user:any = await findUserByEmail(req.body.email);
    if (!user) res.status(404).json({ error: 'User not found' });

    const validPassword = await bcrypt.compare(req.body.password, user?.password);
    if (!validPassword) res.status(401).json({ error: 'Invalid credentials' });

    const token =generateToken(user)

     res.status(200).json({success:true,message:"Login successfully", token, user });
  } catch (err) {
     res.status(500).json({ success:false,message: 'Login failed' });
  }
};
