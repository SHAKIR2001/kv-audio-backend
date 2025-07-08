import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({

    email : {
        type : String,
        required : true,
        unique : true
    },

    name : {
        type : String,
        required : true
    },

    ratinng : {
        type : Number,
        required : true
    },

    comment : {
        type : String,
        required : true
    },

    date : {
        type : Date,
        required : true,
        default : Date.now()
    }

})

const Review =  mongoose.model( "Reviews", reviewSchema );

export default Review;