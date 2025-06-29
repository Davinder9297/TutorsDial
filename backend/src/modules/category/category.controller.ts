import { Request, Response } from 'express';
import {
  createCategoryService,
  deleteCategoryService,
  getAllCategoriesService,
  updateCategoryService
} from './category.service';

export const createCategory = async (req: Request, res: Response) => {
  try {
    const { name } = req.body;
    const category = await createCategoryService(name);
    res.status(201).json({ message: 'Category created', category });
  } catch (err) {
    res.status(500).json({ error: 'Failed to create category', details: err });
  }
};

export const updateCategory = async (req: Request, res: Response) => {
  try {
    const category = await updateCategoryService(req.params.id, req.body.name);
    if (!category)  res.status(404).json({ error: 'Category not found' });
    res.json({ message: 'Category updated', category });
  } catch (err) {
    res.status(500).json({ error: 'Failed to update category', details: err });
  }
};

export const deleteCategory = async (req: Request, res: Response) => {
  try {
    const category = await deleteCategoryService(req.params.id);
    if (!category)  res.status(404).json({ error: 'Category not found' });
    res.json({ message: 'Category deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete category', details: err });
  }
};
export const getAllCategories = async (_req: Request, res: Response) => {
  try {
    const categories = await getAllCategoriesService();
    res.json({ total: categories.length, categories });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch categories', details: err });
  }
};
