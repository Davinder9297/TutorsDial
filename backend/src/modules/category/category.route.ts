import express from 'express';
import { createCategory, updateCategory, deleteCategory, getAllCategories } from './category.controller';
import { validate } from '../../middlewares/validate.middlware';
import { createCategorySchema, updateCategorySchema } from './category.validation';
import { authenticate } from '../../middlewares/auth.middleware';

const router = express.Router();

router.post('/', validate(createCategorySchema),authenticate, createCategory);
router.put('/:id', validate(updateCategorySchema),authenticate, updateCategory);
router.delete('/:id',authenticate, deleteCategory);
router.get('/', getAllCategories);

export default router;
