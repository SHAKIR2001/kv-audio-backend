import Review from "../models/review.js";

export function addReview(req,res){     //check if any user login if not then, end the function
    if (req.user == null){
        res.status(401).json({
            message : "Please login and try again"
        })
        return;
    } 

    


}