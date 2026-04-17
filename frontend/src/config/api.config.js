export const apiConfig = {
  baseURL: "http://localhost:5000/api/v1",
  endpoints: {
    users: {
      register: "/users/register",
      login: "/users/login",
      logout: "/users/logout",
    },
    posts: {
      create: "/posts/post",
      list: "/posts/getpost",
      update: "/posts/updatepost/:id",
      delete: "/posts/delete/:id",
    },
  },
};
