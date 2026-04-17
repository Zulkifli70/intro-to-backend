import { createDashboardPage } from "./pages/dashboard.page.js";
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

const rootElement = document.querySelector("#root");

const state = {
  posts: [],
  user: null,
};

const showToast = (message) => {
  const existingToast = document.querySelector(".toast");
  if (existingToast) existingToast.remove();

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;
  document.body.appendChild(toast);

  window.setTimeout(() => toast.remove(), 2400);
};

const loadInitialData = async () => {
  const [posts, user] = await Promise.all([getPosts(), getCurrentUser()]);
  state.posts = posts;
  state.user = user;
};

const render = () => {
  rootElement.innerHTML = createDashboardPage(state);
  bindEvents();
};

const refreshPosts = async () => {
  state.posts = await getPosts();
};

const bindEvents = () => {
  document.querySelector('[data-form="register"]')?.addEventListener("submit", async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());
    const response = await registerUser(payload);
    state.user = response.user;
    render();
    showToast(response.message);
  });

  document.querySelector('[data-form="login"]')?.addEventListener("submit", async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());
    const response = await loginUser(payload);
    state.user = response.user;
    render();
    showToast(response.message);
  });

  document.querySelector('[data-form="logout"]')?.addEventListener("submit", async (event) => {
    event.preventDefault();
    const response = await logoutUser();
    showToast(response.message);
  });

  document.querySelector('[data-form="post-create"]')?.addEventListener("submit", async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());
    payload.age = Number(payload.age);

    const response = await createPost(payload);
    await refreshPosts();
    render();
    showToast(response.message);
  });

  document.querySelectorAll('[data-form="post-update"]').forEach((formElement) => {
    formElement.addEventListener("submit", async (event) => {
      event.preventDefault();
      const formData = new FormData(event.currentTarget);
      const payload = Object.fromEntries(formData.entries());
      payload.age = Number(payload.age);

      const response = await updatePost(event.currentTarget.dataset.id, payload);
      await refreshPosts();
      render();
      showToast(response.message);
    });
  });

  document.querySelectorAll('[data-action="delete-post"]').forEach((buttonElement) => {
    buttonElement.addEventListener("click", async () => {
      const response = await deletePost(buttonElement.dataset.id);
      await refreshPosts();
      render();
      showToast(response.message);
    });
  });
};

const init = async () => {
  await loadInitialData();
  render();
};

init();
