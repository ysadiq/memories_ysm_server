import express from 'express';

import { getPosts, createPost, updatePost } from '../controllers/posts.js';

const router = express.Router();

router.get('/', getPosts)
router.post('/', createPost)
/* PATCH is used here instead of put to allow the client to transmit
 partial data that will be updated without changing the whole data. */
router.patch('/:id', updatePost)

export default router;