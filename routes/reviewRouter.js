import express from "express"
import {addReview, deleteReview, getReviews, approveReview} from "../controllers/reviewController.js"

const reviewRouter = express.Router();

reviewRouter.post("/add", addReview);
reviewRouter.get("/get", getReviews);
reviewRouter.delete("/delete/:email", deleteReview);
reviewRouter.put("/approve/:email", approveReview);

export default reviewRouter;