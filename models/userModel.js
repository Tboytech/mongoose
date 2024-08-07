import { Schema, model } from 'mongoose';

const userSchema = new Schema({
    firstName:{
        type: String,
        required: true,
        trim:true
    },
    lastName:{
        type: String,
        required: true,
        trim:true
    },
    email:{
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim:true
    },
    userName:{
        type: String,
        required: true,
        unique: true,
        trim:true
    },
    password:{
        type: String,
        required: true
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
})

const User = model('user', userSchema)
export default User