import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config()

mongoose.connect(process.env.VITE_MONGO_URI);

const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    followers: Number,
    likes: Number,
    photos: Number,
});

const User = mongoose.model("User", userSchema);

export default User;

