const mongoose = require("mongoose"); 

import validator from 'validator';

const UserSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true,
        trim: true, 
        unique: true 
    }, 
    email: {
        type: String, 
        required: true,
        validate: [validator.isEmail, "inavlid email"]
    }, 
    pass:{
        type: String, 
        required: true, 
        minlength: 8, 
    }

})