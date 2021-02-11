import express from 'express';
import { getPosts, createPost } from '../controllers/PostsController.js'

const router = express.Router();

router.get('/', getPosts);
router.post('/', createPost);

export default router;