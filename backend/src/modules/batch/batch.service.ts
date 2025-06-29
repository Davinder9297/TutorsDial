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

export const getBatchByIdService = async (id: string) => {
  return await Batch.findById(id);
};

export const getAllBatchesService = async (query: {
  keyword?: string;
  category?: string; // this will be ObjectId now
  page?: number;
  limit?: number;
}) => {
  const { keyword = '', category = '', page = 1, limit = 10 } = query;

  const filter: any = {};

  if (keyword) {
    const regex = new RegExp(keyword, 'i');
    filter.$or = [
      { title: regex },
      { description: regex },
      { class: regex }
    ];
  }

  if (category) {
    filter.category = category;
  }

  const total = await Batch.countDocuments(filter);
  const results = await Batch.find(filter)
    .populate('category', 'name') // populate category name
    .sort({ createdAt: -1 })
    .skip((page - 1) * limit)
    .limit(limit);

  return {
    total,
    page,
    limit,
    totalPages: Math.ceil(total / limit),
    results
  };
};