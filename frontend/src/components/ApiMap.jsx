import { apiConfig } from "../config/api.config.js";
import { formatEndpoint } from "../utils/format.util.js";

export function ApiMap() {
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

  return (
    <section className="panel" id="api-map">
      <div className="panel-header">
        <div>
          <p className="eyebrow">Future Integration</p>
          <h2>Peta endpoint backend</h2>
        </div>
        <div className="pill">Ready to connect</div>
      </div>

      <div className="api-grid">
        <article className="api-card">
          <h3>User Routes</h3>
          {authRows.map((row) => (
            <code key={row}>{row}</code>
          ))}
        </article>
        <article className="api-card">
          <h3>Post Routes</h3>
          {postRows.map((row) => (
            <code key={row}>{row}</code>
          ))}
        </article>
      </div>
    </section>
  );
}
