import express from 'express';
import { getPosts, createPost } from '../controllers/posts.js';

const router = express.Router();

// Example route for getting all posts
router.get('/', getPosts);
router.post('/', createPost);
export default router;