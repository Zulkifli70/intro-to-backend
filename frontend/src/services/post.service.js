import { apiConfig } from "../config/api.config.js";
import { apiRequest } from "./http.service.js";

const normalizePost = (post) => ({
  id: post._id || post.id,
  name: post.name,
  description: post.description,
  age: Number(post.age),
  status: "Synced",
});

export const getPosts = async () => {
  const response = await apiRequest(apiConfig.endpoints.posts.list);
  return response.map(normalizePost);
};

export const createPost = async (payload) => {
  const response = await apiRequest(apiConfig.endpoints.posts.create, {
    method: "POST",
    body: JSON.stringify(payload),
  });

  return {
    ...response,
    post: response.post ? normalizePost(response.post) : null,
  };
};

export const updatePost = async (id, payload) => {
  const endpoint = apiConfig.endpoints.posts.update.replace(":id", id);
  const response = await apiRequest(endpoint, {
    method: "PATCH",
    body: JSON.stringify(payload),
  });

  return {
    ...response,
    post: response.post ? normalizePost(response.post) : null,
  };
};

export const deletePost = async (id) => {
  const endpoint = apiConfig.endpoints.posts.delete.replace(":id", id);

  return apiRequest(endpoint, {
    method: "DELETE",
  });
};
