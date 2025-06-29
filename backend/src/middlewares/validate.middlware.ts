import { Request, Response, NextFunction } from 'express';
import { ObjectSchema } from 'joi';

export const validate = (schema: ObjectSchema) => {
  return (req: Request, _res: Response, next: NextFunction) => {
    const { error, value } = schema.validate(req.body, {
      abortEarly: false,
      stripUnknown: true,
    });

    if (error) {
      const validationErrors = error.details.map((d) => d.message);
      // Throwing an error (can be caught by a centralized error handler)
      throw {
        status: 400,
        message: 'Validation failed',
        details: validationErrors,
      };
    }

    req.body = value; // sanitized and validated body
    next();
  };
};
