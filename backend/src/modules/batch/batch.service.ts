import { Batch, IBatch } from './batch.model';

export const createBatchService = async (data: Partial<IBatch>) => {
  return await Batch.create(data);
};

export const updateBatchService = async (id: string, data: Partial<IBatch>) => {
  return await Batch.findByIdAndUpdate(id, data, { new: true });
};

export const deleteBatchService = async (id: string) => {
  const result = await Batch.findByIdAndDelete(id);
  return !!result;
};

export const getBatchesByTutorService = async (tutorId: string) => {
  return await Batch.find({ tutor: tutorId }).sort({ createdAt: -1 });
};

export const getBatchesByCategoryService = async (category: string) => {
  return await Batch.find({ category: new RegExp(category, 'i') }).sort({ createdAt: -1 });
};

export const getBatchByIdService = async (id: string) => {
  return await Batch.findById(id);
};

export const searchBatchesService = async (keyword: string) => {
  return await Batch.find({
    $or: [
      { title: { $regex: keyword, $options: 'i' } },
      { description: { $regex: keyword, $options: 'i' } },
      { category: { $regex: keyword, $options: 'i' } },
      { class: { $regex: keyword, $options: 'i' } },
    ]
  });
};
