import express from 'express';
import {
  createBatch,
  deleteBatch,
  updateBatch,
  getBatchesByTutor,
  getBatchDetails,
  getAllBatches
} from './batch.controller';
import { validate } from '../../middlewares/validate.middlware';
import { createBatchSchema, getAllBatchesQuerySchema, updateBatchSchema } from './batch.validation';
import { authenticate } from '../../middlewares/auth.middleware';
import { upload } from '../../middlewares/upload';

const router = express.Router();

router.post('/', validate(createBatchSchema),authenticate,upload.single('batchImage'), createBatch);
router.put('/:id',validate(updateBatchSchema),authenticate,upload.single('batchImage'), updateBatch);
router.delete('/:id',authenticate, deleteBatch);
router.get('/tutor/:tutorId', getBatchesByTutor);
router.get('/', validate(getAllBatchesQuerySchema), getAllBatches);
router.get('/:id', getBatchDetails);

export default router;
