import ImageKit from "imagekit";
import Post from "../models/post.model.js";
import User from "../models/user.model.js";

export const getPosts = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 2;
  const posts = await Post.find()
    .limit(limit)
    .skip((page - 1) * 5);

  const totalPosts = await Post.countDocuments();
  const hasMore = page * limit < totalPosts;
  //   console.log(posts);
  res.status(200).json({posts,hasMore});
};
export const getPost = async (req, res) => {
  const post = await Post.findOne({ slug: req.params.slug });
  //   console.log(post);
  res.status(200).json(post);
};

export const createPost = async (req, res) => {
  const { userId: clerkUserId } = req.auth();
  console.log(req.headers);
  if (!clerkUserId) {
    return res.status(401).json("Not authenticated!");
  }
  console.log(clerkUserId);

  const user = await User.findOne({ clerkUserId });
  console.log(user, "user");

  if (!user) {
    return res.status(404).json("User not found");
  }

  let slug = req.body.title.replace(/ /g, "-").toLowerCase();

  let existingPost = await Post.findOne({ slug });

  let counter = 2;
  while (existingPost) {
    slug = `${slug}-${counter}`;
    existingPost = await Post.findOne({ slug });
    counter++;
  }

  const newPost = new Post({ user: user._id, slug, ...req.body });

  const post = await newPost.save();
  //   console.log(post);
  res.status(200).json(post);
};
export const deletePost = async (req, res) => {
  const clerkUserId = req.auth.userId;

  if (!clerkUserId) {
    return res.status(401).json("Not authenticated!");
  }
  const user = await User.findOne({
    clerkUserId,
  });
  const deletedPost = await Post.findByIdAndDelete({
    _id: req.params.id,
    user: user._id,
  });
  if (!deletePost) {
    return res.status(403).json("You can delete only your posts!");
  }
  //   console.log(post);
  res.status(200).json("post has been deleted");
};

const imageKit = new ImageKit({
  urlEndpoint: "https://ik.imagekit.io/86jh2jtb1",
  publicKey: "public_cXuhaQ2QQZfFCJ1j3WZuh7SFZN0=",
  privateKey: "private_5aOf/Q3FsxnTtabAYXv+JmU9COU=",
});

export const uploadAuth = async (req, res) => {
  const result = imageKit.getAuthenticationParameters();
  res.send(result);
};
