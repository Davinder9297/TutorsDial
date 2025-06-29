import { Router } from 'express';
import { register, login } from './user.controller';
import { registerSchema, loginSchema } from './user.validation';
import { validate } from '../../middlewares/validate.middlware';
import { upload } from '../../middlewares/upload';

const router = Router();

router.post('/register', validate(registerSchema),upload.fields([
  { name: 'profileImage', maxCount: 1 },
  { name: 'photoId', maxCount: 1 },
  { name: 'degreeCertificates', maxCount: 5 }, // allow up to 5 certificates
]), register);
router.post('/login', validate(loginSchema), login);

export default router;
