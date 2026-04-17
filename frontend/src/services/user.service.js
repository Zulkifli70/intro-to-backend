import { mockUser } from "../data/mock-data.js";

let currentUser = { ...mockUser };

const wait = (payload) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(payload), 250);
  });

export const getCurrentUser = async () => wait(currentUser);

export const registerUser = async (payload) => {
  currentUser = {
    id: `usr_${Date.now()}`,
    username: payload.username,
    email: payload.email,
  };

  return wait({
    message: "Simulasi register berhasil. Tinggal ganti ke request API nanti.",
    user: currentUser,
  });
};

export const loginUser = async ({ email }) =>
  wait({
    message: "Simulasi login berhasil.",
    user: {
      ...currentUser,
      email,
    },
  });

export const logoutUser = async () =>
  wait({
    message: "Simulasi logout berhasil.",
  });
