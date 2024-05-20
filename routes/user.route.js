import express from 'express';
import upload from '../middlewares/multer.js';
import registerUser from '../controllers/user.controller.js';

const router = express.Router();

router.route('/register').post(upload.single('profile'), registerUser);

export default router;
