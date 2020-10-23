import { Router } from 'express';
import OrphanagesController from "./controllers/OrphanagesController";
import multer from "multer";
import upload_config from './config/upload'


const upload = multer(upload_config);
const router = Router();

router.get('/orphanages',OrphanagesController.index);
router.get('/orphanage/:id',OrphanagesController.show);
router.post('/orphanages',upload.array('images'),OrphanagesController.create);

export default router;
