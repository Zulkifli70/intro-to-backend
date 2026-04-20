export function StatCards({ posts, user }) {
  const syncedPosts = posts.filter((post) => post.status === "Synced").length;

  return (
    <section className="stats-grid" id="overview">
      <article className="stat-card accent">
        <span>Total Post</span>
        <strong>{posts.length}</strong>
        <p>Sudah ditarik langsung dari endpoint backend.</p>
      </article>
      <article className="stat-card">
        <span>Data Tersinkron</span>
        <strong>{syncedPosts}</strong>
        <p>Menunjukkan post yang berhasil dimapping dari response backend.</p>
      </article>
      <article className="stat-card">
        <span>User Aktif</span>
        <strong>{user?.username || "Guest"}</strong>
        <p>State user disimpan setelah register atau login berhasil.</p>
      </article>
    </section>
  );
}
