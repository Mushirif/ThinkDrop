
import Rating from "../models/rating.model.js";
import User from "../models/user.model.js";

export const ratingPost = async (req, res) => {
  const clerkUserId = req.auth().userId;
  const postId = req.params.id;
  console.log(postId,"postId");
  
  if (!clerkUserId) {
    return res.status(401).json("Not authenticated!");
  }
  const user = await User.findOne({clerkUserId})

  const newRating = new Rating({
    rating:req.body.rating,
    user:user._id,
    post:postId,
  })
  const saveRating = await newRating.save();
  return res.status(200).json(saveRating)
};

export const getRating =  async (req,res)=>{
    const clerkUserId = req.auth().userId;
  const postId = req.params.id;
  console.log(postId,"postId");
  
  if (!clerkUserId) {
    return res.status(401).json("Not authenticated!");
  }
  const user = await User.findOne({clerkUserId})
  const getRating = await Rating.findById({
    user:user._id,
    post:postId,
  })
  if(!getRating){
    return res.status(404).json("rating not found!")
  }
  return res.status(200).json(getRating)

}