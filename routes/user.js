import express from 'express';
import { getTodo, createTodo } from '../controllers/todo.js';
const router = express.Router();

router.get('/',getTodo);

router.post('/user', createTodo);

export default router;