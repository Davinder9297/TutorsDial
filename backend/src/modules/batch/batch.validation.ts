import Joi from 'joi';

export const createBatchSchema = Joi.object({
  batchImage: Joi.string().uri().required(),
  title: Joi.string().required(),
  description: Joi.string().required(),
  currentPrice: Joi.number().required(),
  oldPrice: Joi.number().optional(),
  timing: Joi.string().required(),
  startingDate: Joi.date().required(),
  class: Joi.string().required(),
  mode: Joi.string().valid('online', 'offline', 'hybrid').required(),
  address: Joi.string().when('mode', {
    is: Joi.valid('offline', 'hybrid'),
    then: Joi.string().required(),
    otherwise: Joi.optional()
  }),
  category: Joi.string().required(),
  tutor: Joi.string().required()
});

export const updateBatchSchema = Joi.object({
  batchImage: Joi.string().uri().optional(),
  title: Joi.string().optional(),
  description: Joi.string().optional(),
  currentPrice: Joi.number().optional(),
  oldPrice: Joi.number().optional(),
  timing: Joi.string().optional(),
  startingDate: Joi.date().optional(),
  class: Joi.string().optional(),
  mode: Joi.string().valid('online', 'offline', 'hybrid').optional(),
  address: Joi.string().when('mode', {
    is: Joi.valid('offline', 'hybrid'),
    then: Joi.string().required(),
    otherwise: Joi.optional()
  }),
  category: Joi.string().optional()
});
