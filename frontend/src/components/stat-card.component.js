export const createStatCards = ({ totalPosts, totalDrafts, username }) => `
  <section class="stats-grid" id="overview">
    <article class="stat-card accent">
      <span>Total Post</span>
      <strong>${totalPosts}</strong>
      <p>Siap nanti ditarik dari endpoint list post.</p>
    </article>
    <article class="stat-card">
      <span>Draft Aktif</span>
      <strong>${totalDrafts}</strong>
      <p>Berguna untuk preview state data dari backend.</p>
    </article>
    <article class="stat-card">
      <span>User Aktif</span>
      <strong>${username}</strong>
      <p>Diambil sementara dari mock auth service.</p>
    </article>
  </section>
`;
