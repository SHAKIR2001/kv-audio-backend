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
    },

        profilePicture : {
        type : String,
        required : true,
        default : "https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg?semt=ais_hybrid&w=740" 
     },

    isApproved : {
        type : Boolean,
        required : true,
        default : false
    }

})

const Review =  mongoose.model( "Reviews", reviewSchema );

export default Review;