import mongoose from "mongoose"

const userSchema = new mongoose.Schema({

    email : {
        type : String,
        required : true,
        unique : true
    },

    password : {
        type : String,
        required : true
    },

    role : {
        type : String,
        required : true,
        default : "customer",

    },

    firstName : {
        type : String,
        required : true
    },

    lastName : {
        type : String,
        required : true
    },

    address : {
        type : String,
        required : true
    },

    phone : {
        type : String,
        required : true
    },

    profilePicture : {
        type : String,
        required : true,
        default : "https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg?semt=ais_hybrid&w=740" 
     }


});

const User = mongoose.model( "Users", userSchema );

export default User;



