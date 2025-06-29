import { Request, Response } from 'express';
import { createBatchService, deleteBatchService, updateBatchService, getBatchesByTutorService, getBatchesByCategoryService, getBatchByIdService, searchBatchesService } from './batch.service';
import { Batch } from './batch.model';
import mongoose from 'mongoose';

export const createBatch = async (req: Request, res: Response) => {
  try {
        const batchImage = req.file;
 const tutorId = req.user?._id;
 console.log(req.file);
 
  if (batchImage) {
      req.body.batchImage = batchImage.path;
    }
    const batch = await createBatchService({ ...req.body, tutor: tutorId });
    res.status(201).json({success:true, message: 'Batch created successfully', batch });
  } catch (err) {
    res.status(500).json({success:false, message: 'Failed to create batch',details: err });
  }
};

export const updateBatch = async (req: Request, res: Response) => {
  try {
    console.log("req.body",req.body);
const batchImage = req.file;
  if (batchImage) {
      req.body.batchImage = batchImage.path;
    }
    const batch = await updateBatchService(req.params.id, req.body);
    if (!batch) res.status(404).json({ error: 'Batch not found' });
    res.json({success:true, message: 'Batch updated successfully', batch });
  } catch (err) {
    res.status(500).json({ success:false, message: 'Failed to update batch', details: err });
  }
};

export const deleteBatch = async (req: Request, res: Response) => {
  try {
    const success = await deleteBatchService(req.params.id);
    if (!success) res.status(404).json({ error: 'Batch not found' });
    res.json({ success:true,message: 'Batch deleted successfully' });
  } catch (err) {
    res.status(500).json({success:false, message: 'Failed to delete batch',details: err });
  }
};

export const getBatchesByTutor = async (req: Request, res: Response) => {
  try {
    const batches = await getBatchesByTutorService(req.params.tutorId);
    res.json({success:false, message:'Batches fetched successfully'});
  } catch (err) {
    res.status(500).json({ success:false, message: 'Failed to get tutor batches',details: err});
  }
};

export const getBatchesByCategory = async (req: Request, res: Response) => {
  try {
    const batches = await getBatchesByCategoryService(req.params.category);
    res.json({success:false,batches});
  } catch (err) {
    res.status(500).json({ success:false, message: 'Failed to get batches by category', details: err });
  }
};

export const getBatchDetails = async (req: Request, res: Response) => {
  try {
    const batch = await getBatchByIdService(req.params.id);
    if (!batch) res.status(404).json({ error: 'Batch not found' });
    res.json(batch);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch batch details', details: err });
  }
};

export const searchBatches = async (req: Request, res: Response) => {
  try {
    const { keyword } = req.query;
    const results = await searchBatchesService(String(keyword));
    res.json(results);
  } catch (err) {
    res.status(500).json({ error: 'Search failed', details: err });
  }
};
