import express from 'express';
import { logIn, register } from '../controllers/auth.controller';

const router = express.Router();

router.post('/login', logIn);

router.post('/signup', register);

export default router;
