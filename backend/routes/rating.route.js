import express from "express";
import { getRating, ratingPost } from "../controllers/rating.controller.js";


const router = express.Router()

router.post("/:id",ratingPost);
router.get("/:id",getRating);

export default router;