import express from "express";
import { addPoduct } from "../controllers/productController.js"

const productRouter = express.Router();

productRouter.post("/add", addPoduct);

export default productRouter;