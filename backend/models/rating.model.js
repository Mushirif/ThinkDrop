import { Schema } from "mongoose";
import mongoose from "mongoose";

const ratingSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  post: {
    type: Schema.Types.ObjectId,
    ref: "Post",
    required: true,
  },
  rating: {
    type: Number,
  },
});

export default mongoose.model("Rating", ratingSchema);
