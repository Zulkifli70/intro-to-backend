export function StatCards({ posts, user }) {
  const totalDrafts = posts.filter((post) => post.status === "Draft").length;

  return (
    <section className="stats-grid" id="overview">
      <article className="stat-card accent">
        <span>Total Post</span>
        <strong>{posts.length}</strong>
        <p>Siap nanti ditarik dari endpoint list post.</p>
      </article>
      <article className="stat-card">
        <span>Draft Aktif</span>
        <strong>{totalDrafts}</strong>
        <p>Berguna untuk preview state data dari backend.</p>
      </article>
      <article className="stat-card">
        <span>User Aktif</span>
        <strong>{user.username}</strong>
        <p>Diambil sementara dari mock auth service.</p>
      </article>
    </section>
  );
}
