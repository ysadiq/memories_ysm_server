import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    title: String,
    message: String,
    name: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likes: {
        type: [String],
        default: []
    }
}, {
    timestamps: true
});

// Convert schema into model
const PostMessage = mongoose.model('PostMessage', postSchema);

// Then, export it
export default PostMessage;