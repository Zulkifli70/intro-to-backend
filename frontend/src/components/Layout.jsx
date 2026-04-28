export function Layout({ children }) {
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div>
          <p className="eyebrow">Intro-to-backend-developer</p>
          <h1>Intro Dashboard</h1>
          <p className="sidebar-copy">
            Interface ini sudah terhubung ke sisi backend, dengan service layer
            yang tetap dipisah supaya flow request dan pengembangan berikutnya
            tetap rapi.
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
