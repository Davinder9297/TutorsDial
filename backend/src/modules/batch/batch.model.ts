import mongoose, { Schema, Document } from 'mongoose';

export interface IBatch extends Document {
  batchImage: string;
  title: string;
  description: string;
  currentPrice: number;
  oldPrice?: number;
  timing: string;
  startingDate: Date;
  class: string;
  mode: 'online' | 'offline' | 'hybrid';
  address?: string;
  category: string;
  tutor: mongoose.Types.ObjectId;
}

const batchSchema = new Schema<IBatch>(
  {
    batchImage: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    currentPrice: { type: Number, required: true },
    oldPrice: { type: Number },
    timing: { type: String, required: true },
    startingDate: { type: Date, required: true },
    class: { type: String, required: true },
    mode: { type: String, enum: ['online', 'offline', 'hybrid'], required: true },
    address: { type: String }, // Only required if mode is offline or hybrid
    category: { type: String, required: true },
    tutor: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  },
  { timestamps: true }
);

export const Batch = mongoose.model<IBatch>('Batch', batchSchema);
