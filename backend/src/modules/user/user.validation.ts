import Joi from "joi";

export const registerSchema = Joi.object({
  name: Joi.string().min(3).max(50).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  role: Joi.string().valid('student', 'tutor').required(),
  phoneNumber: Joi.string().when('role', {
    is: 'tutor',
    then: Joi.string().required(),
    otherwise: Joi.optional()
  }),
  fullName: Joi.string().when('role', {
    is: 'tutor',
    then: Joi.string().required()
  }),
  bio: Joi.string().when('role', {
    is: 'tutor',
    then: Joi.string().min(50).required()
  }),
  profileImageUrl: Joi.string().uri().optional(),
  photoIdUrl: Joi.string().uri().when('role', {
    is: 'tutor',
    then: Joi.string().required()
  }),
  degreeCertificatesUrls: Joi.array().items(Joi.string().uri()).when('role', {
    is: 'tutor',
    then: Joi.array().min(1).required()
  }),
});

export const loginSchema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } }) // allows emails like user@localhost for testing
    .required()
    .messages({
      'string.email': 'Please enter a valid email address',
      'any.required': 'Email is required',
    }),

  password: Joi.string()
    .min(6)
    .required()
    .messages({
      'string.min': 'Password must be at least 6 characters long',
      'any.required': 'Password is required',
    }),
});
