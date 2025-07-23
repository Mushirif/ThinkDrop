import Post from "../models/post.model.js";

export const getPosts = async (req, res) => {
  const posts = await Post.find();
  //   console.log(posts);
  res.status(200).json(posts);
};
export const getPost = async (req, res) => {
  const post = await Post.findOne({ slug: req.params.slug });
  //   console.log(post);
  res.status(200).json(post);
};

export const createPost = async (req, res) => {
  const newPost = new Post(req.body);

  const post = await newPost.save();
  //   console.log(post);
  res.status(200).json(post);
};
export const deletePost = async (req, res) => {
  const post = await Post.findByIdAndDelete(req.params.id)
  //   console.log(post);
  res.status(200).json("post has been deleted");
};
