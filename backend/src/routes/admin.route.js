import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { upload } from "../middlewares/multer.middleware.js";
import {
  handleImageUpload,
  addProduct,
  fetchAllProducts,
  editProduct,
  deleteProduct,
} from '../controllers/admin.controller.js';



const router = Router()

router.route('/upload-image').post(upload.single('my_file'), handleImageUpload)
router.route('/add').post(addProduct)
router.route('/edit/:id').put(editProduct)
router.route('/delete/:id').delete(deleteProduct)
router.route("/get").get(fetchAllProducts);


export default router