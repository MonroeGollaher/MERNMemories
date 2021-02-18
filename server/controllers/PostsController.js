import Post from '../models/Post.js'
import mongoose from 'mongoose'

export const getPosts = async (req, res) => {
  try {
      const posts = await Post.find()
      res.status(200).json(posts)
  } catch (error) {
      res.status(404).json({ message: error.message })
  }
}

export const createPost = async (req, res) => {
  const post = req.body
  const newPost = new Post(post)

  try {
      await newPost.save()
      res.status(201).json(newPost)
  } catch (error) {
      res.status(409).json({ message: error.message })
  }
}

export const updatePost = async (req, res) => {
  const { id: _id } = req.params
  const toUpdate = req.body

  if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that ID')

  const updated = await Post.findByIdAndUpdate(_id, {...toUpdate, _id }, { new: true } )

  res.json(updated)
}

export const deletePost = async (req, res) => {
  const { id } = req.params

  if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that ID')

  await Post.findByIdAndRemove(id)

  res.json({ message: 'Post deleted successfully'})
}

export const likePost = async (req, res) => {
  const { id } = req.params

  if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that ID')

  const post = await Post.findById(id)
  // @ts-ignore
  const updatedPost = await Post.findByIdAndUpdate(id, { likeCount: post.likeCount + 1 }, { new: true })

  res.json(updatedPost)
}