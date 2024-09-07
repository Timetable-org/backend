import express from 'express';
import { logIn, register } from '../controllers/auth.controller';
import { userSchema } from '../validations-schemas/create-user.schema';
import { checkSchema } from 'express-validator';
import { validate } from '../middlewares/validation.middleware';

const router = express.Router();

router.post('/login', checkSchema(userSchema), validate, logIn);

router.post('/signup', checkSchema(userSchema), validate, register);

export default router;
