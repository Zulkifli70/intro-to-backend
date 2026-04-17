export const createLayout = (content) => `
  <div class="app-shell">
    <aside class="sidebar">
      <div>
        <p class="eyebrow">Frontend Module</p>
        <h1>Intro Dashboard</h1>
        <p class="sidebar-copy">
          Interface ini masih memakai mock data, tapi struktur file dan flow-nya sudah
          disiapkan untuk menyambung ke backend kamu nanti.
        </p>
      </div>

      <nav class="sidebar-nav">
        <a href="#overview">Overview</a>
        <a href="#auth">Auth</a>
        <a href="#posts">Posts</a>
        <a href="#api-map">API Map</a>
      </nav>
    </aside>

    <main class="main-content">
      ${content}
    </main>
  </div>
`;
