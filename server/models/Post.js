import mongoose from 'mongoose';
const Schema = mongoose.Schema

const postSchema = new Schema({
  title: { type: String, required: true },
  message: { type: String, required: true },
  creator: { type: String, required: true },
  tags: [String],
  selectedFile: { type: String, required: true },
  likeCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
})

let Post = mongoose.model('Post', postSchema);
export default Post;