import { Router } from "express";
import { postRouter } from "../controller/post.controller.js";

const router = Router();

router.route("/post").post(postRouter);

export default router;
