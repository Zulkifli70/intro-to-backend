import { Post } from "../models/post.model.js";

const postRouter = async (req, res) => {
  try {
    const { name, description, age } = req.body;

    const post = await Post.create({
      name,
      description,
      age,
    });

    res.status(201).json({
      message: "Post sent succesfully",
      post: { name: post.name, description: post.description, age: post.age },
    });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export { postRouter };
