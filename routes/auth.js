import express from 'express';
const router = express.Router();
import { authUser } from '../controllers/personController.js';

router.get('/', authUser);

export default router;