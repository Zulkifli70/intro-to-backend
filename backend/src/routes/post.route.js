import { Router } from "express";
import {
  createPost,
  getPosts,
  updatePost,
  deletePost,
} from "../controller/post.controller.js";

const router = Router();

router.route("/post").post(createPost);
router.route("/getpost").get(getPosts);
router.route("/updatepost/:id").patch(updatePost);
router.route("/delete/:id").delete(deletePost);

export default router;
