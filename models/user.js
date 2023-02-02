import mongoose from "mongoose";
import { stringify } from "querystring";

const userSchema = mongoose.Schema({
    id: String,
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true }
}, {
    timestamps: true
});

// Convert schema into model
const User = mongoose.model('User', userSchema);

// Then, export it
export default User;