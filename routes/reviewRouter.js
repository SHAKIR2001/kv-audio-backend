import express from "express"
import {addReview, deleteReview, getReviews} from "../controllers/reviewController.js"

const reviewRouter = express.Router();

reviewRouter.post("/add", addReview);
reviewRouter.get("/get", getReviews);
reviewRouter.delete("/delete/:email", deleteReview);

export default reviewRouter;