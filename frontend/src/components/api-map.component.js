import { formatEndpoint } from "../utils/format.util.js";

export const createApiMap = (apiConfig) => {
  const authRows = [
    formatEndpoint("post", `${apiConfig.baseURL}${apiConfig.endpoints.users.register}`),
    formatEndpoint("post", `${apiConfig.baseURL}${apiConfig.endpoints.users.login}`),
    formatEndpoint("post", `${apiConfig.baseURL}${apiConfig.endpoints.users.logout}`),
  ];

  const postRows = [
    formatEndpoint("post", `${apiConfig.baseURL}${apiConfig.endpoints.posts.create}`),
    formatEndpoint("get", `${apiConfig.baseURL}${apiConfig.endpoints.posts.list}`),
    formatEndpoint("patch", `${apiConfig.baseURL}${apiConfig.endpoints.posts.update}`),
    formatEndpoint("delete", `${apiConfig.baseURL}${apiConfig.endpoints.posts.delete}`),
  ];

  return `
    <section class="panel" id="api-map">
      <div class="panel-header">
        <div>
          <p class="eyebrow">Future Integration</p>
          <h2>Peta endpoint backend</h2>
        </div>
        <div class="pill">Ready to connect</div>
      </div>

      <div class="api-grid">
        <article class="api-card">
          <h3>User Routes</h3>
          ${authRows.map((row) => `<code>${row}</code>`).join("")}
        </article>
        <article class="api-card">
          <h3>Post Routes</h3>
          ${postRows.map((row) => `<code>${row}</code>`).join("")}
        </article>
      </div>
    </section>
  `;
};
