export function Layout({ children }) {
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div>
          <p className="eyebrow">Frontend Module</p>
          <h1>Intro Dashboard</h1>
          <p className="sidebar-copy">
            Interface ini masih memakai mock data, tapi struktur file dan flow-nya
            sudah disiapkan untuk menyambung ke backend kamu nanti.
          </p>
        </div>

        <nav className="sidebar-nav">
          <a href="#overview">Overview</a>
          <a href="#auth">Auth</a>
          <a href="#posts">Posts</a>
          <a href="#api-map">API Map</a>
        </nav>
      </aside>

      <main className="main-content">{children}</main>
    </div>
  );
}
