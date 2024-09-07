import { Schema } from 'express-validator';

export const userSchema: Schema = {
  name: {
    notEmpty: { errorMessage: 'First name is required' },
  },
  email: {
    isEmail: { errorMessage: 'Invalid email address' },
  },
  password: {
    isLength: {
      options: { min: 6, max: 20 },
      errorMessage: 'Password must be between 6 and 20 characters',
    },
  },
};
