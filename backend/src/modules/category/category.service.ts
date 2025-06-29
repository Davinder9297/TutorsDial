import { Category } from './category.model';

export const createCategoryService = async (name: string) => {
  const category = new Category({ name });
  return await category.save();
};

export const updateCategoryService = async (id: string, name: string) => {
  return await Category.findByIdAndUpdate(id, { name }, { new: true });
};

export const deleteCategoryService = async (id: string) => {
  return await Category.findByIdAndDelete(id);
};
export const getAllCategoriesService = async () => {
  return await Category.find().sort({ createdAt: -1 });
};