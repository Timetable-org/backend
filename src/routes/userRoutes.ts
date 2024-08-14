import express from 'express';
import { getUser, getUsers, createUser } from '../controllers';

const router = express.Router();

router.get('/', (req, res) => {
  getUsers(req, res);
});

router.get('/:id', (req, res) => {
  getUser(req, res);
});

router.post('/', (req, res) => {
  createUser(req, res);
});

export default router;
