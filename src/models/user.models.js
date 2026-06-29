import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    fullName: {
        type: String,
    },
    avatar: {
        type: String,
    },
    coverImage: {
        type: String,
    },
    watchHistory: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Video"
        }
    ],
    password: {
        type: String,
        required: true
    },
    refreshToken: {
        type: String,
    }
}, {timestamps: true})


export const User = mongoose.model('User', userSchema)