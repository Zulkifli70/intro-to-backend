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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadInitialData = async () => {
      try {
        const [postData, userData] = await Promise.all([getPosts(), getCurrentUser()]);
        setPosts(postData);
        setUser(userData);
      } catch (error) {
        setToastMessage(error.message);
      } finally {
        setIsLoading(false);
      }
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
    try {
      const response = await registerUser(payload);
      setUser(response.user);
      setToastMessage(response.message);
    } catch (error) {
      setToastMessage(error.message);
    }
  };

  const handleLogin = async (payload) => {
    try {
      const response = await loginUser(payload);
      setUser(response.user);
      setToastMessage(response.message);
    } catch (error) {
      setToastMessage(error.message);
    }
  };

  const handleLogout = async (payload) => {
    try {
      const response = await logoutUser(payload);
      setUser(null);
      setToastMessage(response.message);
    } catch (error) {
      setToastMessage(error.message);
    }
  };

  const handleCreatePost = async (payload) => {
    try {
      const response = await createPost(payload);
      setPosts(await getPosts());
      setToastMessage(response.message);
    } catch (error) {
      setToastMessage(error.message);
    }
  };

  const handleUpdatePost = async (postId, payload) => {
    try {
      const response = await updatePost(postId, payload);
      setPosts(await getPosts());
      setToastMessage(response.message);
    } catch (error) {
      setToastMessage(error.message);
    }
  };

  const handleDeletePost = async (postId) => {
    try {
      const response = await deletePost(postId);
      setPosts(await getPosts());
      setToastMessage(response.message);
    } catch (error) {
      setToastMessage(error.message);
    }
  };

  if (isLoading) {
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
