import { createApiMap } from "../components/api-map.component.js";
import { createAuthPanel } from "../components/auth-panel.component.js";
import { createLayout } from "../components/layout.component.js";
import { createPostPanel } from "../components/post-panel.component.js";
import { createStatCards } from "../components/stat-card.component.js";
import { apiConfig } from "../config/api.config.js";

export const createDashboardPage = ({ posts, user }) => {
  const totalDrafts = posts.filter((post) => post.status === "Draft").length;

  return createLayout(`
    <section class="hero">
      <p class="eyebrow">Simple Frontend</p>
      <h2>Dashboard frontend untuk backend auth dan posts</h2>
      <p class="hero-copy">
        Fokusnya masih di interface dan struktur file. Logic service sudah dipisah supaya
        nanti saat backend siap, kita tinggal ganti mock function ke HTTP request.
      </p>
    </section>

    ${createStatCards({
      totalPosts: posts.length,
      totalDrafts,
      username: user.username,
    })}
    ${createAuthPanel(user)}
    ${createPostPanel(posts)}
    ${createApiMap(apiConfig)}
  `);
};
