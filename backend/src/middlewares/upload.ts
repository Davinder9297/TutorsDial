    import multer from 'multer';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import cloudinary from '../utils/cloudinary';

const storage = new CloudinaryStorage({
  cloudinary,
  params: async (req, file) => {
    return {
      folder: 'tutorsdial',
      public_id: `${Date.now()}-${file.originalname}`,
      resource_type: 'auto',
    };
  },
});

export const upload = multer({ storage });

// Export middleware to handle multiple file fields
export const tutorFileUpload = upload.fields([
  { name: 'profileImage', maxCount: 1 },
  { name: 'photoId', maxCount: 1 },
  { name: 'degreeCertificates', maxCount: 5 }, // allow up to 5 certificates
]);
