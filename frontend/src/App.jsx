import { useEffect, useState } from "react";
import { Toast } from "./components/Toast.jsx";
import { DashboardPage } from "./pages/DashboardPage.jsx";
import {
  createPost,
  deletePost,
  getPosts,
  updatePost,
} from "./services/post.service.js";
import {
  getCurrentUser,
  loginUser,
  logoutUser,
  registerUser,
} from "./services/user.service.js";

export default function App() {
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState(null);
  const [toastMessage, setToastMessage] = useState("");

  useEffect(() => {
    const loadInitialData = async () => {
      const [postData, userData] = await Promise.all([getPosts(), getCurrentUser()]);
      setPosts(postData);
      setUser(userData);
    };

    loadInitialData();
  }, []);

  useEffect(() => {
    if (!toastMessage) return undefined;

    const timeoutId = window.setTimeout(() => {
      setToastMessage("");
    }, 2400);

    return () => window.clearTimeout(timeoutId);
  }, [toastMessage]);

  const handleRegister = async (payload) => {
    const response = await registerUser(payload);
    setUser(response.user);
    setToastMessage(response.message);
  };

  const handleLogin = async (payload) => {
    const response = await loginUser(payload);
    setUser(response.user);
    setToastMessage(response.message);
  };

  const handleLogout = async () => {
    const response = await logoutUser();
    setToastMessage(response.message);
  };

  const handleCreatePost = async (payload) => {
    const response = await createPost(payload);
    setPosts(await getPosts());
    setToastMessage(response.message);
  };

  const handleUpdatePost = async (postId, payload) => {
    const response = await updatePost(postId, payload);
    setPosts(await getPosts());
    setToastMessage(response.message);
  };

  const handleDeletePost = async (postId) => {
    const response = await deletePost(postId);
    setPosts(await getPosts());
    setToastMessage(response.message);
  };

  if (!user) {
    return null;
  }

  return (
    <>
      <DashboardPage
        posts={posts}
        user={user}
        onCreatePost={handleCreatePost}
        onDeletePost={handleDeletePost}
        onLogin={handleLogin}
        onLogout={handleLogout}
        onRegister={handleRegister}
        onUpdatePost={handleUpdatePost}
      />
      <Toast message={toastMessage} />
    </>
  );
}
