import express from 'express';
import { getUser, getUsers, createUser } from '../controllers';

const router = express.Router();

router.get('/', getUsers);

router.get('/:id', getUser);

router.post('/', createUser);

export default router;
