import express from 'express';
import { getInfo, postInfo } from '../controllers/bajaj.controller.js';

const router = express.Router();

router.get("/bfhl", getInfo);
router.post("/bfhl", postInfo);


export default router;