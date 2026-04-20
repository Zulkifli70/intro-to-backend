import { apiConfig } from "../config/api.config.js";

async function parseResponse(response) {
  const contentType = response.headers.get("content-type") || "";
  const isJson = contentType.includes("application/json");
  const payload = isJson ? await response.json() : await response.text();

  if (!response.ok) {
    const message =
      (typeof payload === "object" && payload?.message) ||
      (typeof payload === "string" && payload) ||
      "Request gagal diproses.";

    throw new Error(message);
  }

  return payload;
}

export async function apiRequest(endpoint, options = {}) {
  const response = await fetch(`${apiConfig.baseURL}${endpoint}`, {
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
    ...options,
  });

  return parseResponse(response);
}
