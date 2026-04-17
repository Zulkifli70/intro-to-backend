export const capitalize = (value = "") =>
  value.charAt(0).toUpperCase() + value.slice(1);

export const formatEndpoint = (method, path) => `${method.toUpperCase()} ${path}`;
