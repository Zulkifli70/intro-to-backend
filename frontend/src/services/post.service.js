import { mockPosts } from "../data/mock-data.js";

let posts = [...mockPosts];

const wait = (payload) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(payload), 250);
  });

export const getPosts = async () => wait([...posts]);

export const createPost = async (payload) => {
  const newPost = {
    id: `pst_${Date.now()}`,
    ...payload,
    status: "Draft",
  };

  posts = [newPost, ...posts];
  return wait({
    message: "Post berhasil ditambahkan ke mock state.",
    post: newPost,
  });
};

export const updatePost = async (id, payload) => {
  posts = posts.map((post) => (post.id === id ? { ...post, ...payload } : post));
  const updatedPost = posts.find((post) => post.id === id);

  return wait({
    message: "Post mock berhasil diperbarui.",
    post: updatedPost,
  });
};

export const deletePost = async (id) => {
  posts = posts.filter((post) => post.id !== id);

  return wait({
    message: "Post mock berhasil dihapus.",
  });
};
