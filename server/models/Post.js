import mongoose from 'mongoose';
const Schema = mongoose.Schema

const postSchema = new Schema({
  title: { type: String, required: true },
  message: { type: String, required: true },
  name: { type: String, required: true },
  creator: { type: String, required: true },
  tags: { type: Array, required: true },
  selectedFile: { type: String, required: true },
  likes: {
    type: [String],
    default: [],
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
})

let Post = mongoose.model('Post', postSchema);

export default Post;