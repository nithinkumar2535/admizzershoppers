import { Router } from "express";
import getFilteredProduct from "../controllers/user.product.controller.js";


const router = Router();


router.route("/get").get(getFilteredProduct);

export default router;
